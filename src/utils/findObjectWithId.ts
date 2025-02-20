import { IdentifiedObject } from "$root/types";

/**
 * Call the `.find` method on an array of objects that
 * have "id" fields to search for a provided string
 *
 * @param objects An array of objects of the
 * same type that have `id` fields.
 * @param searchingFor The string to search for
 * in the object `id` fields
 * @returns The result of the search.
 */
const findObjectWithId = <T extends IdentifiedObject>(
	objects: T[],
	searchingFor: string
): T | undefined => objects.find((o) => o.id === searchingFor);

export default findObjectWithId;
