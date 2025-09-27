# Global .gitignore Setup on Windows

This guide shows how to configure a **global `.gitignore`** file on Windows so that local-only files (like your **MCP server setup**) never get committed to repos.

---

## 1. Create the global ignore file

### PowerShell (recommended)
```powershell
New-Item -Path $env:USERPROFILE\.gitignore_global -ItemType File -Force
```

### Command Prompt (CMD)
```cmd
echo. > %USERPROFILE%\.gitignore_global
```

### Manual
- Navigate to: `C:\Users\<your-username>\`
- Create a new text file.
- Rename it to: `.gitignore_global`  
  (remove `.txt` extension, enable "show file extensions" in Explorer if needed).

---

## 2. Tell Git to use this file
Run once (applies to all repos):

```cmd
git config --global core.excludesfile "%USERPROFILE%\.gitignore_global"
```

**Verify:**
```cmd
git config --global --get core.excludesfile
```
Should output: `C:\Users\<your-username>\.gitignore_global`

---

## 3. Add ignore patterns
Open the file in your editor:

**PowerShell (VS Code):**
```powershell
code $env:USERPROFILE\.gitignore_global
```

**CMD (Notepad):**
```cmd
notepad %USERPROFILE%\.gitignore_global
```

### Recommended entries
```gitignore
########################################
# Local MCP server setup (private)
########################################
.mcp/
.mcpServers/
mcp-config.json
mcp.json
mcp.local.json
mcp.local.*
mcp.env
mcp-*.yaml
mcp-servers/
.mcp-cache/

########################################
# Common local-only files (safe)
########################################
# OS cruft
Thumbs.db
Desktop.ini
.DS_Store

# Editors / merges
*.swp
*.swo
*.orig

# Env & logs
.env
.env.*
*.log
logs/

# VS Code (optional)
.vscode/*
!.vscode/settings.json
!.vscode/extensions.json
!.vscode/tasks.json
```

---

## 4. Test the setup
In any repo with MCP files:

```cmd
git status --ignored --untracked-files=all
```

Check a specific file:
```cmd
git check-ignore -v mcp-config.json
```

You should see the rule that ignored it.

---

## 5. If MCP files were already committed
Remove them from tracking:

```cmd
git rm -r --cached .mcp mcp-config.json mcp.env
git commit -m "Stop tracking local MCP setup files"
```

---

## 6. Repo-only ignores (optional)
For one repo only, add rules to:

```
<repo>/.git/info/exclude
```

This is not shared with others.

---

## 7. Manage later
- Check current setting:
  ```cmd
  git config --global --get core.excludesfile
  ```
- Remove global ignore:
  ```cmd
  git config --global --unset core.excludesfile
  ```
- Move to a new location:
  ```cmd
  git config --global core.excludesfile "D:\dotfiles\.gitignore_global"
  ```

---

✅ Done! Your MCP server setup and other local-only files will **stay private and never leak into repos**.
