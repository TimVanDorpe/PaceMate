import 'package:flutter/material.dart';
import 'screens/login_screen.dart';

void main() {
  runApp(const PacemakerApp());
}

class PacemakerApp extends StatelessWidget {
  const PacemakerApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Pacemaker',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF6B9BD1),
          brightness: Brightness.light,
        ),
        scaffoldBackgroundColor: const Color(0xFFF0F7FB),
        useMaterial3: true,
      ),
      home: const LoginScreen(),
    );
  }
}
