---
name: code-reviewer
description: Reviews code changes in this Next.js/React/Tailwind project for correctness, accessibility, security, performance, and project conventions. Use when the user asks for a code review, PR review, or feedback on a change.
---

# Code Reviewer

## Stack context
Next.js 16 (static export), React 19, TypeScript, Tailwind CSS 3, Framer Motion, lucide-react.

## Review workflow

1. Read all changed files before commenting.
2. Check each area in the checklist below.
3. Output a structured report (see template).
4. Only flag issues that are real problems — avoid nitpicking style that doesn't affect correctness or UX.

## Checklist

### Correctness
- [ ] No broken logic, off-by-one errors, or incorrect state updates
- [ ] React hooks follow the rules of hooks (no conditionals, correct deps array)
- [ ] `useCallback`/`useMemo` deps are complete and correct

### TypeScript
- [ ] No implicit `any` or unsafe type casts (`as unknown as X`)
- [ ] Props interfaces are defined; no orphaned types

### Tailwind & styling
- [ ] Responsive prefixes (`sm:`, `md:`) used consistently
- [ ] No inline `style=` where a Tailwind class would do
- [ ] No hard-coded light-mode colors (project baseline is `bg-black/[0.96]`)

### Accessibility
- [ ] Interactive elements have `aria-label` or visible text
- [ ] Decorative elements have `aria-hidden`
- [ ] Focus styles present (`focus-visible:ring-*`)
- [ ] `<img>` tags have meaningful `alt` text

### Performance
- [ ] Images use `next/image` or `<picture>` with proper sizes
- [ ] `"use client"` only where state/effects are needed

### Security
- [ ] No secrets or env vars in client components (`NEXT_PUBLIC_` prefix only)
- [ ] External links use `rel="noopener noreferrer"`
- [ ] No `dangerouslySetInnerHTML` without sanitisation

### Conventions (project-specific)
- [ ] Components use named exports (not default exports)
- [ ] Icons come from `lucide-react` or `@tabler/icons-react` — no inline SVG unless unavoidable
- [ ] Animations use Framer Motion — no raw CSS `@keyframes` unless defined in `tailwind.config.ts`
- [ ] Scripts that touch secrets use `dotenv` and read from `.env.local`; never `process.env` in components

## Output template

```
## Code review

### Summary
[1–2 sentences on overall quality]

### 🔴 Must fix
- `file.tsx:line` — [description + suggested fix]

### 🟡 Suggestions
- `file.tsx:line` — [description]

### 🟢 Looks good
- [Things done particularly well]
```

## Additional resources
- For project architecture and conventions, see [CONTEXT.md](CONTEXT.md)
