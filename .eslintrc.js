module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"thomas-clark",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint"],
	ignorePatterns: ["src/assets/**", "node_modules/**", "prisma/schemas/**"],
	rules: {
		"react/react-in-jsx-scope": "off",
		"react/prop-types": "off",
		"jsdoc/require-jsdoc": [
			"warn",
			{
				publicOnly: true,
				require: {
					ArrowFunctionExpression: true,
					ClassDeclaration: true,
					ClassExpression: true,
					FunctionDeclaration: true,
					FunctionExpression: true,
					MethodDefinition: true,
				},
				contexts: [
					"ArrowFunctionExpression",
					"ClassDeclaration",
					"ClassExpression",
					"ClassProperty",
					"FunctionDeclaration",
					"FunctionExpression",
					"MethodDefinition",
					"TSMethodSignature",
				],
			},
		],
		"jsdoc/require-param-type": "off",
		"jsdoc/require-returns-type": "off",
		"jsdoc/require-returns": "off",
		"jsdoc/require-param": ["warn", { checkRestProperty: false }],
		"jsdoc/check-param-names": [
			"error" | "warn",
			{
				checkRestProperty: false,
			},
		],
		"jsdoc/no-types": "error",
		"no-warning-comments": "warn",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-empty-function": "off",
		"@typescript-eslint/no-unused-vars": ["warn", { ignoreRestSiblings: true }],
	},
};
