# Testing Guide for PaceMate

## Overview
This guide explains the testing approach and requirements for the PaceMate Flutter application.

## Testing Philosophy

### Test-Driven Development (TDD)
We follow TDD principles:
1. **Write tests first** - Before implementing any feature
2. **Red-Green-Refactor** cycle:
   - 🔴 Red: Write a failing test
   - 🟢 Green: Make it pass with minimal code
   - 🔵 Refactor: Improve the code while keeping tests green

## Three Required Tests Per Feature

Every new feature **must** include at least 3 tests:

### 1. Happy Path Test ✅
**Purpose**: Test the main use case with valid inputs

**Example**:
```dart
test('Happy Path - User can login with valid credentials', () {
  // Arrange
  final authService = AuthService();
  
  // Act
  final result = authService.login('admin', 'admin');
  
  // Assert
  expect(result.isSuccess, true);
  expect(result.user, isNotNull);
});
```

### 2. Edge Case Test 🎯
**Purpose**: Test boundary conditions and unusual but valid inputs

**Example**:
```dart
test('Edge Case - Handle empty participant list', () {
  // Arrange
  final location = Location(
    id: '1',
    name: 'Test Location',
    participants: [],
  );
  
  // Act
  final count = location.getParticipantCount();
  
  // Assert
  expect(count, 0);
});
```

### 3. Error Handling Test ❌
**Purpose**: Test with invalid inputs and verify proper error handling

**Example**:
```dart
test('Error Handling - Invalid credentials throw exception', () {
  // Arrange
  final authService = AuthService();
  
  // Act & Assert
  expect(
    () => authService.login('', ''),
    throwsA(isA<InvalidCredentialsException>()),
  );
});
```

## Running Tests

### Run all tests
```bash
flutter test
```

### Run specific test file
```bash
flutter test test/models/location_test.dart
```

### Run tests with coverage
```bash
flutter test --coverage
```

## Backend Testing

When testing backend integration with `http://thinktank.runasp.net/index.html`:

```dart
test('API Integration - Fetch locations from backend', () async {
  // Arrange
  final apiClient = ApiClient(
    baseUrl: 'http://thinktank.runasp.net',
  );
  
  // Act
  final locations = await apiClient.getLocations();
  
  // Assert
  expect(locations, isNotEmpty);
  expect(locations.first, isA<Location>());
});
```

## Best Practices

1. **Keep tests independent** - Each test should run in isolation
2. **Use descriptive names** - Test names should explain what is being tested
3. **Follow AAA pattern** - Arrange, Act, Assert
4. **Mock external dependencies** - Use mocks for API calls
5. **Test behavior, not implementation** - Focus on what, not how

---

Created: October 15, 2025
