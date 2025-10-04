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
v-genx g <type> <name> [options]
```
- `<type>` → Type of resource to generate (e.g. component)
- `<name>` → The name of the resource (e.g. Button, Card)

## 🧠 Options

| Option | Description |
| ------ | ------ |
| --vue2 | Generate code for Vue 2 |
| --vue3 | Generate code for Vue 3 |
| --composition | Use the Composition API (Vue 3 only) |
| --ts | Use the Composition API (Vue 3 only) with Typescript |

## 📦 Examples

#### Vue 3 + Composition API + TypeScript
```bash
v-genx g component Card --vue3 --composition --ts
```
Creates something like:
```bash
src/components/Card.vue
```

#### Vue 2 (Options API)
```bash
v-genx g component Button --vue2
```
Creates:
```bash
src/components/Button.vue
```

## 🛠 Custom Output Directory
By default, generated files are placed in:
```bash
src/components/
```

You can customize the output path in your project root using a `vgenx.config.json`:
```bash
{
  "paths": {
    "component": "apps/admin/ui/components",
  }
}
```
Now, running:
```bash
v-genx g component Card --vue2
```
will generate the file at:
```bash
apps/admin/ui/components/Card.vue
```

## 🧾 License
MIT ©