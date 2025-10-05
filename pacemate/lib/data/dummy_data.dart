import '../models/location.dart';

class DummyData {
  static List<Location> getLocations() {
    return [
      Location(
        id: 1,
        name: 'Citadelpark Gent',
        latitude: 51.0357,
        longitude: 3.7166,
        time: '10:00 - 11:30',
        participants: [
          Participant(
            name: 'Emma Janssens',
            role: 'Deelnemer',
            avatarUrl: 'https://i.pravatar.cc/150?img=1',
          ),
          Participant(
            name: 'Liam Peeters',
            role: 'Deelnemer',
            avatarUrl: 'https://i.pravatar.cc/150?img=2',
          ),
          Participant(
            name: 'Sophie Claes',
            role: 'Coach',
            avatarUrl: 'https://i.pravatar.cc/150?img=3',
          ),
          Participant(
            name: 'Noah Vermeulen',
            role: 'Deelnemer',
            avatarUrl: 'https://i.pravatar.cc/150?img=4',
          ),
        ],
      ),
      Location(
        id: 2,
        name: 'Watersportbaan Gent',
        latitude: 51.0243,
        longitude: 3.6847,
        time: '14:00 - 15:30',
        participants: [
          Participant(
            name: 'Lucas De Smet',
            role: 'Deelnemer',
            avatarUrl: 'https://i.pravatar.cc/150?img=5',
          ),
          Participant(
            name: 'Olivia Maes',
            role: 'Coach',
            avatarUrl: 'https://i.pravatar.cc/150?img=6',
          ),
          Participant(
            name: 'Milan Willems',
            role: 'Deelnemer',
            avatarUrl: 'https://i.pravatar.cc/150?img=7',
          ),
          Participant(
            name: 'Luna Bakker',
            role: 'Deelnemer',
            avatarUrl: 'https://i.pravatar.cc/150?img=8',
          ),
        ],
      ),
      Location(
        id: 3,
        name: 'Bourgoyen-Ossemeersen',
        latitude: 51.0707,
        longitude: 3.6706,
        time: '09:00 - 10:30',
        participants: [
          Participant(
            name: 'Arthur Martens',
            role: 'Deelnemer',
            avatarUrl: 'https://i.pravatar.cc/150?img=9',
          ),
          Participant(
            name: 'Ella De Vos',
            role: 'Deelnemer',
            avatarUrl: 'https://i.pravatar.cc/150?img=10',
          ),
          Participant(
            name: 'Finn Hermans',
            role: 'Coach',
            avatarUrl: 'https://i.pravatar.cc/150?img=11',
          ),
          Participant(
            name: 'Marie Goossens',
            role: 'Deelnemer',
            avatarUrl: 'https://i.pravatar.cc/150?img=12',
          ),
        ],
      ),
      Location(
        id: 4,
        name: 'Blaarmeersen',
        latitude: 51.0538,
        longitude: 3.6735,
        time: '16:00 - 17:30',
        participants: [
          Participant(
            name: 'Louis Jacobs',
            role: 'Deelnemer',
            avatarUrl: 'https://i.pravatar.cc/150?img=13',
          ),
          Participant(
            name: 'Amelie Mertens',
            role: 'Deelnemer',
            avatarUrl: 'https://i.pravatar.cc/150?img=14',
          ),
          Participant(
            name: 'Jules Wouters',
            role: 'Deelnemer',
            avatarUrl: 'https://i.pravatar.cc/150?img=15',
          ),
          Participant(
            name: 'Camille Simon',
            role: 'Coach',
            avatarUrl: 'https://i.pravatar.cc/150?img=16',
          ),
        ],
      ),
      Location(
        id: 5,
        name: 'Groot Veldeken',
        latitude: 51.0627,
        longitude: 3.7284,
        time: '11:00 - 12:30',
        participants: [
          Participant(
            name: 'Victor Dubois',
            role: 'Deelnemer',
            avatarUrl: 'https://i.pravatar.cc/150?img=17',
          ),
          Participant(
            name: 'Charlotte Laurent',
            role: 'Coach',
            avatarUrl: 'https://i.pravatar.cc/150?img=18',
          ),
          Participant(
            name: 'Adam Fontaine',
            role: 'Deelnemer',
            avatarUrl: 'https://i.pravatar.cc/150?img=19',
          ),
          Participant(
            name: 'Alice Lambert',
            role: 'Deelnemer',
            avatarUrl: 'https://i.pravatar.cc/150?img=20',
          ),
        ],
      ),
    ];
  }
}
