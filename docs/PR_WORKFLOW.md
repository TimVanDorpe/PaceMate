# Pull Request Workflow for PaceMate

## Overview
This document outlines the standard workflow for creating pull requests in the PaceMate Flutter project.

## Branch Naming Convention
- **feature/**: New features (e.g., `feature/user-authentication`)
- **fix/**: Bug fixes (e.g., `fix/login-crash`)
- **test/**: Testing-related changes (e.g., `test/add-unit-tests`)
- **docs/**: Documentation updates (e.g., `docs/update-readme`)
- **refactor/**: Code refactoring (e.g., `refactor/optimize-map-rendering`)

## Standard Workflow

### 1. Create a New Branch
Always branch from `master`:
```bash
git checkout master
git pull origin master
git checkout -b feature/your-feature-name
```

### 2. Write Tests First (TDD Approach)
Before implementing any functionality, write at least **3 unit tests**:

#### Required Tests:
1. **Happy Path Test**: Test the main use case with valid inputs
2. **Edge Case Test**: Test boundary conditions and unusual inputs
3. **Error Handling Test**: Test with invalid inputs and verify error handling

### 3. Implement the Feature
After tests are written:
- Write the minimum code needed to make tests pass
- Follow Flutter best practices
- Ensure all tests pass: `flutter test`

### 4. Backend Integration
When integrating with the backend:
- **Base URL**: `http://thinktank.runasp.net/index.html`
- Use proper error handling
- Add integration tests

### 5. Create Pull Request
1. Push your branch to GitHub
2. Create PR to `master` branch
3. Request review
4. Merge after approval

---

Created: October 15, 2025
