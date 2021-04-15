import { act, screen } from "@testing-library/react";
import { appDisplayTitle, appSlogan } from "../../../constants/branding";
import Home, { homePageTestIds } from "../../../pages";
import { checkTestIdsRender, renderTest } from "../../../utils/testUtils";

test("Contains required elements", () => {
	act(() => {
		renderTest(<Home />);
	});
	expect(screen.getByText("Get Started")).toBeInTheDocument();
	expect(screen.getByText("What is this?")).toBeInTheDocument();
	expect(screen.getByText(appSlogan)).toBeInTheDocument();
	expect(screen.getByText(appDisplayTitle)).toBeInTheDocument();

	checkTestIdsRender(homePageTestIds);

	Object.values(homePageTestIds).forEach((item) => {
		expect(screen.getByTestId(item)).toBeVisible();
	});

	expect(screen.getByText("What is this?")).not.toBeVisible();
	//? Test that currently not implemented elements are not visible
});
