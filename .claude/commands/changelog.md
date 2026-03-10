Ask for the time dedicated for the session, and the main changes made. At the end also Analyze all changes made today in the project and generate a daily changelog entry.

## Instructions
0. Take in date and ask for the changes made today and the lenght of the session 
1. Run `git log --since="midnight" --oneline --all` to find today's commits
2. Run `git diff HEAD~$(git rev-list --count --since="midnight" HEAD)..HEAD --stat` to see changed files
3. If no commits today, check `git status` and `git diff` for unstaged/uncommitted work
4. Determine today's date in YYYY-MM-DD format
5. Create or update the file `changelog/YYYY-MM-DD.md` with:

### Format

```markdown
# Changelog — YYYY-MM-DD

## Summary
One-line summary of the day's progress.

## Changes

### [Area/Project affected]
- What changed and why (one bullet per logical change)
- Reference specific files or features when relevant

## Next Steps
- Pending tasks or follow-ups identified during today's work (if any)
```

6. If the file already exists for today, append new changes under the existing sections (do not duplicate entries)
7. After writing the changelog entry, show the user a brief summary of what was logged
