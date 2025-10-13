# 🧩 v-genx — Vue Component Generator

**v-genx** is a CLI tool to quickly generate boilerplate files for Vue 2 and Vue 3 components.  
It supports both the **Options API** and **Composition API**, and can optionally use **TypeScript**.

---

## 🚀 Installation

### Global installation (recommended)
```bash
npm install -g v-genx
```
or with  Bun
```bash
bun add --global v-genx
```

## ⚙️ Usage
```bash
v-genx g <type> <name>
```
- `<type>` → Type of resource to generate (e.g. component)
- `<name>` → The name of the resource (e.g. Button, Card)

## 🛠 Config

This file defines the basic package configuration for automatically generating components, unit tests, and project structures. (`vgenx.config.json` - you need to add/create it to your project):
```json
{
  "framework": {
    "version": 3,
    "composition": true
  },
  "language": {
    "typescript": true
  },
  "testing": {
    "unit": {
      "ext": "spec",
      "runner": "vue-test-utils"
    }
  },
  "paths": {
    "component": "./src/test/apps/admin/ui/components",
    "test": "./src/test/unit-test"
  }
}
```
### framework: 
Defines the Vue information you use in your project.

| Option | Type | Description |
| ------ | ------ | ------ |
| `version` | number | Major version of Vue.js. In this case, 3. (2 or 3) |
| `composition` | boolean (optional) | Indicates whether the Composition API (true) or the Options API (false) is used. By default is Option API |

### language: 
Configures whether the project's primary language is typescript.

| Option | Type | Description |
| ------ | ------ | ------ |
| `typescript` | boolean | If enabled (true), generated files will have a `.ts` or `.vue` extension with TypeScript support. |

### testing: 
Defines conventions for unit testing.
| Option | Type | Description |
| ------ | ------ | ------ |
| `unit.ext` | string | Test file extension. Example: MyComponent.**spec**.ts. |
| `unit.runner` | string | Testing framework used. In this case, `vue-test-utils`. |

### paths: 
Defines the base paths for generated files.
| Option | Type | Description |
| ------ | ------ | ------ |
| `component` | string | Path where the generated Vue components will be created. |
| `test` | string | Path where the generated unit tests will be located. |


## 📦 Examples

If your CLI or generator supports this setting, you can use it like this:
```bash
v-genx g component Card
```
This will create:
```bash
src/test/apps/admin/ui/components/ButtonPrimary.vue
src/test/unit-test/ButtonPrimary.spec.ts
```

## 🧾 License
MIT ©