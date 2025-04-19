# ✨ Copilot Attach Open Files

This VS Code extension adds all currently open file tabs to your **GitHub Copilot Chat** context — no more referencing files one by one.

---

## 📌 Features

- Automatically references all open tabs in the Copilot Chat context
- Works with local and remote files
- One command: no clicks, no hassle

---

## 🤯 Why Not Just Use `@workspace`?

The `@workspace` context variable in Copilot Chat **is unreliable in large repositories** — especially monorepos or mature Rails/Django/Node apps. Copilot may:

- Miss important files
- Ignore deep or nested folders
- Include too much noise (irrelevant files)

With this extension, you **explicitly control which files Copilot sees**, without the manual tedium of referencing them one by one.

---

## 🚀 Usage

1. Open the files you want Copilot Chat to be aware of
2. Run the command:  
   **Attach Open Files to Copilot Chat**  
   _(via Command Palette: `Ctrl+Shift+P`)_

Your files will appear as attached context in the chat bar.

---

## 💡 Use Cases

- You're working across multiple related files and want Copilot to understand the context
- You're reviewing or rewriting code across services/controllers/models/etc.
- You're debugging something with scattered logic and want Copilot to "see what you see"
- You want consistent, predictable context — not whatever `@workspace` decides to include

---

## 🛠 Requirements

- VS Code `^1.99.0`
- GitHub Copilot Chat extension enabled

---

## 📦 Extension Settings

None. This extension is zero-config.
