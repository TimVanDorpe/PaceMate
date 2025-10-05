class Participant {
  final String name;
  final String role;
  final String avatarUrl;

  Participant({
    required this.name,
    required this.role,
    required this.avatarUrl,
  });
}

class Location {
  final int id;
  final String name;
  final double latitude;
  final double longitude;
  final String time;
  final List<Participant> participants;

  Location({
    required this.id,
    required this.name,
    required this.latitude,
    required this.longitude,
    required this.time,
    required this.participants,
  });
}
