module.exports = plop => {
  plop.setGenerator("Component", {
    description: "New monday component",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "What is the name of your component? (use spaces if multi word)"
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{properCase componentName}}/{{properCase componentName}}.jsx",
        templateFile: "plop/component/component-js.txt"
      },
      {
        type: "add",
        path: "src/components/{{properCase componentName}}/{{properCase componentName}}.scss",
        templateFile: "plop/component/component-scss.txt"
      },
      {
        type: "add",
        path: "src/components/{{properCase componentName}}/__stories__/{{camelCase componentName}}.stories.js",
        templateFile: "plop/component/component-stories-js.txt"
      },
      {
        type: "add",
        path:
          "src/components/{{properCase componentName}}/__tests__/{{camelCase componentName}}-snapshot-tests.jest.js",
        templateFile: "plop/general/component-snapshot-tests-jest.txt"
      },
      {
        type: "add",
        path: "src/components/{{properCase componentName}}/__tests__/{{camelCase componentName}}-tests.jest.js",
        templateFile: "plop/general/component-tests-jest.txt"
      },
      {
        type: "append",
        path: "src/components/index.js",
        template:
          'export { default as {{properCase componentName}} } from "./{{properCase componentName}}/{{properCase componentName}}";'
      },
      {
        type: "append",
        path: "src/published-components.js",
        pattern: /(\/\/ plop_marker:published-components)/g,
        template:
          '\t{{properCase componentName}}: "/src/components/{{properCase componentName}}/{{properCase componentName}}.jsx",'
      }
    ]
  });
};
