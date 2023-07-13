interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

interface Observer {
  // Receive update from subject.
  update(subject: Subject): void;
}

type test = { aaa: string };
