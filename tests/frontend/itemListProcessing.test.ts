/* eslint-disable jsdoc/require-jsdoc */
import {
	renderHook,
	act,
	RenderResult as RenderHookResult,
} from "@testing-library/react-hooks";
import { ChangeEvent } from "react";
import { useSheetPageState } from "$sheets/store";
import { FilterableItemProperty, ProcessableItemProperty } from "$sheets/types";
import { alphabet } from "../fixtures/testingConstants";
import { getArrayOfRandomItems } from "../utils/getRandomDataArrays";
import { generateRandomInventoryItem } from "../utils/randomGenerators";
import { Character, Item } from "@prisma/client";
import { A } from "@mobily/ts-belt";

const testSorting = (
	items: Item[],
	members: Character[],
	column: ProcessableItemProperty
): void => {
	test(column, () => {
		const { result } = renderHook(useSheetPageState);
		const getProcessed = () => result.current.getProcessedItems(items, members);

		act(() => {
			result.current.sortInventory(column, "ascending");
		});
		expect(getProcessed()).toEqual(items);

		act(() => {
			result.current.sortInventory(column, "descending");
		});
		expect(getProcessed()).toEqual(items.reverse());
	});
};

describe("Sorting ", () => {
	const items: Item[] = alphabet.map((letter, index) => ({
		id: letter,
		quantity: index,
		weight: index,
		value: index,
		carriedByCharacterId: index < alphabet.length / 2 ? "1" : "2",
		category: letter,
		description: letter,
		name: letter,
		referenceLink: null,
		sheetId: "",
	}));
	const columns = Object.keys(items[0]);
	const members: Character[] = [
		{
			id: "1",
			name: "a",
			carryCapacity: 0,
			sheetId: "",
		},
		{
			id: "2",
			name: "b",
			carryCapacity: 0,
			sheetId: "",
		},
	];

	columns.forEach((column: ProcessableItemProperty) => {
		testSorting([...items], members, column);
	});
});

const getId = (item: Item) => item.id;

describe("Filter", () => {
	const itemAmounts = {
		a: 20,
		b: 26,
		c: 32,
		d: 38,
	};
	const getItemsWithProperty = (
		property:
			| FilterableItemProperty
			| [FilterableItemProperty, FilterableItemProperty],
		value: keyof typeof itemAmounts
	) =>
		[...Array(itemAmounts[value])].map((_, index) => {
			if (typeof property === "string") {
				return generateRandomInventoryItem({
					[property]: value,
					id: value + index,
				});
			} else {
				return generateRandomInventoryItem({
					[property[0]]: value,
					[property[1]]: value,
					id: value + index,
				});
			}
		});

	const getItemsWithProperties = (
		property: FilterableItemProperty,
		letters: (keyof typeof itemAmounts)[]
	) =>
		letters.reduce<Item[]>(
			(result, letter) => [
				...result,
				...getItemsWithProperty(property, letter),
			],
			[]
		);

	const items = Object.keys(itemAmounts).reduce<Item[]>(
		(result, letter: keyof typeof itemAmounts) => [
			...result,
			...getItemsWithProperty(["category", "carriedByCharacterId"], letter),
		],
		[]
	);

	test("Filter Out Single Category", () => {
		const { result } = renderHook(useSheetPageState);
		const getProcessed = () => result.current.getProcessedItems(items, []);

		act(() => {
			result.current.updateFilter("category", "a");
		});

		expect(result.current.filters).toEqual({
			category: ["a"],
			carriedByCharacterId: [],
		});
		expect(getProcessed().map(getId)).toIncludeSameMembers(
			getItemsWithProperties("category", ["b", "c", "d"]).map(getId)
		);
	});

	test("Filter Out Two Categories", () => {
		const { result } = renderHook(useSheetPageState);
		const getProcessed = () => result.current.getProcessedItems(items, []);

		act(() => {
			result.current.resetFilters();
			result.current.updateFilter("category", "a");
			result.current.updateFilter("category", "b");
		});

		expect(getProcessed().map(getId)).toIncludeSameMembers(
			getItemsWithProperties("category", ["c", "d"]).map(getId)
		);
	});

	test("Filter Out All But One Category", () => {
		const { result } = renderHook(useSheetPageState);
		const getProcessed = () => result.current.getProcessedItems(items, []);

		act(() => {
			result.current.resetFilters();
			result.current.updateFilter("category", "a");
			result.current.updateFilter("category", "b");
			result.current.updateFilter("category", "c");
		});

		expect(getProcessed().map(getId)).toIncludeSameMembers(
			getItemsWithProperty("category", "d").map(getId)
		);
	});
	test("Filter Out All Categories", () => {
		const { result } = renderHook(useSheetPageState);
		const getProcessed = () => result.current.getProcessedItems(items, []);

		act(() => {
			result.current.resetFilters();
			result.current.updateFilter("category", "a");
			result.current.updateFilter("category", "b");
			result.current.updateFilter("category", "c");
			result.current.updateFilter("category", "d");
		});

		expect(getProcessed()).toEqual([]);
	});

	// # Carried by
	test("Filter Out Single Carrier", () => {
		const { result } = renderHook(useSheetPageState);
		const getProcessed = () => result.current.getProcessedItems(items, []);

		act(() => {
			result.current.resetFilters();
			result.current.updateFilter("carriedByCharacterId", "a");
		});

		expect(getProcessed().map(getId)).toIncludeSameMembers(
			getItemsWithProperties("carriedByCharacterId", ["b", "c", "d"]).map(getId)
		);
	});

	test("Filter Out Two Carriers", () => {
		const { result } = renderHook(useSheetPageState);
		const getProcessed = () => result.current.getProcessedItems(items, []);

		act(() => {
			result.current.resetFilters();
			result.current.updateFilter("carriedByCharacterId", "a");
			result.current.updateFilter("carriedByCharacterId", "b");
		});

		expect(getProcessed().map(getId)).toIncludeSameMembers(
			getItemsWithProperties("carriedByCharacterId", ["c", "d"]).map(getId)
		);
	});

	test("Filter Out All But One Carrier", () => {
		const { result } = renderHook(useSheetPageState);
		const getProcessed = () => result.current.getProcessedItems(items, []);

		act(() => {
			result.current.resetFilters();
			result.current.updateFilter("carriedByCharacterId", "a");
			result.current.updateFilter("carriedByCharacterId", "b");
			result.current.updateFilter("carriedByCharacterId", "c");
			result.current.updateFilter("carriedByCharacterId", "d");
		});

		expect(getProcessed()).toEqual([]);
	});

	test("Filter Out All Carriers", () => {
		const { result } = renderHook(useSheetPageState);
		const getProcessed = () => result.current.getProcessedItems(items, []);

		act(() => {
			result.current.resetFilters();
			result.current.updateFilter("carriedByCharacterId", "a");
			result.current.updateFilter("carriedByCharacterId", "b");
			result.current.updateFilter("carriedByCharacterId", "c");
			result.current.updateFilter("carriedByCharacterId", "d");
		});

		expect(getProcessed()).toEqual([]);
	});

	// # reset all filters

	test("Reset Filters", () => {
		const { result } = renderHook(useSheetPageState);
		const getProcessed = () => result.current.getProcessedItems(items, []);

		act(() => {
			result.current.resetFilters();
			result.current.updateFilter("carriedByCharacterId", "a");
			result.current.updateFilter("carriedByCharacterId", "b");
			result.current.updateFilter("carriedByCharacterId", "c");
			result.current.updateFilter("carriedByCharacterId", "d");
			result.current.updateFilter("category", "a");
		});

		expect(getProcessed()).toIncludeAllMembers([]);

		act(() => {
			result.current.resetFilters();
		});

		expect(getProcessed().map(getId)).toIncludeAllMembers(items.map(getId));
	});
});

describe("Searching", () => {
	const search = (
		result: RenderHookResult<ReturnType<typeof useSheetPageState>>,
		searchQuery: string
	) =>
		result.current.searchbarOnChange({
			target: {
				value: searchQuery,
			},
		} as ChangeEvent<HTMLInputElement>);
	test("Basic One Letter Search Returning a Single Item", () => {
		const items = [
			generateRandomInventoryItem({ name: "a" }),
			generateRandomInventoryItem({ name: "b" }),
			generateRandomInventoryItem({ name: "c" }),
			generateRandomInventoryItem({ name: "d" }),
		];
		const { result } = renderHook(useSheetPageState);
		const getProcessed = () => result.current.getProcessedItems(items, []);

		act(() => {
			search(result, "a");
		});

		expect(getProcessed()).toEqual([items[0]]);
	});

	test("Basic One Letter Search Returning 5 Items", () => {
		const items = [
			...getArrayOfRandomItems(5, { name: "a" }),
			generateRandomInventoryItem({ name: "b" }),
			generateRandomInventoryItem({ name: "c" }),
			generateRandomInventoryItem({ name: "d" }),
		];
		const { result } = renderHook(useSheetPageState);
		const getProcessed = () => result.current.getProcessedItems(items, []);

		act(() => {
			search(result, "a");
		});

		expect(getProcessed()).toEqual(items.slice(0, 5));
	});

	test("Basic One Letter Search In Large Scrambled Array", () => {
		const amountOfTargetItems = 12;
		const itemsWithA = getArrayOfRandomItems(amountOfTargetItems, {
			name: "a",
		});
		const items = A.shuffle([
			...itemsWithA,
			...getArrayOfRandomItems(16, { name: "b" }),
			...getArrayOfRandomItems(64, { name: "c" }),
			...getArrayOfRandomItems(128, { name: "d" }),
		]);
		const { result } = renderHook(useSheetPageState);
		const getProcessed = () => result.current.getProcessedItems(items, []);

		act(() => {
			search(result, "a");
		});

		expect(getProcessed().map(getId)).toIncludeSameMembers(
			itemsWithA.map(getId)
		);
	});

	test.skip("Search Single Item in Large, (All Unique) Array", () => {
		const items = A.shuffle(getArrayOfRandomItems(400));
		const { result } = renderHook(useSheetPageState);
		const getProcessed = () =>
			result.current.getProcessedItems(items as Item[], []);

		act(() => {
			search(result, items[0].name);
		});

		expect(getProcessed().map(getId)).toEqual(items.slice(0, 1).map(getId));
	});

	test.skip("Reset Search", () => {
		const items = A.shuffle(getArrayOfRandomItems(400));
		const { result } = renderHook(useSheetPageState);
		const getProcessed = () => result.current.getProcessedItems(items, []);

		act(() => {
			search(result, items[0].name);
		});

		expect(getProcessed().map(getId)).toEqual(
			[...items].slice(0, 1).map(getId)
		);

		act(() => {
			search(result, "");
		});

		expect(getProcessed().map(getId)).toIncludeSameMembers(items.map(getId));
	});
});
