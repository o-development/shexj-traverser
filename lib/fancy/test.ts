import transformerFactoryFactory from "./transformerFactoryFactory";
import expect from "expect";

export type Person = FriendlyPerson | WorkingPerson;

export interface FriendlyPerson {
  type: "FriendlyPerson";
  name: string;
  bestFriend?: Person;
  friends: Person[];
}

export interface WorkingPerson {
  type: "WorkingPerson";
  name: string;
  occupations: string[];
  coworkers?: WorkingPerson[];
}

const friendNetworkTraverserFactory = transformerFactoryFactory({
  FriendlyPerson: {
    type: "interface",
    properties: {
      bestFriend: "Person",
      friends: "Person",
    },
  },
  WorkingPerson: {
    type: "interface",
    properties: {
      coworkers: "WorkingPerson",
    },
  },
  Person: {
    type: "union",
    detectType: async (
      person: Person
    ): Promise<"FriendlyPerson" | "WorkingPerson"> => {
      return person.type;
    },
  },
});

const friendNetworkToStringTraverser = friendNetworkTraverserFactory({
  FriendlyPerson: {
    transformer: async (
      originalData: FriendlyPerson,
      transformed: {
        type: "FriendlyPerson";
        name: string;
        bestFriend?: string;
        friends: string;
      }
    ): Promise<string> => {
      return `FriendlyPerson-${originalData.name}(${transformed.bestFriend}, ${transformed.friends})`;
    },
    properties: {
      bestFriend: async (
        originalData: Person,
        transformed: string
      ): Promise<string> => {
        return `bestFriend(${transformed})`;
      },
      friends: async (
        originalData: Person[],
        transformed: string[]
      ): Promise<string> => {
        return `friends(${transformed.join(", ")})`;
      },
    },
  },
  WorkingPerson: {
    transformer: async (
      originalData: WorkingPerson,
      transformed: {
        type: "WorkingPerson";
        name: string;
        occupations: string[];
        coworkers: string;
      }
    ): Promise<string> => {
      return `WorkingPerson-${originalData.name}(${transformed.coworkers})`;
    },
    properties: {
      coworkers: async (
        originalData: WorkingPerson[],
        transformed: string[]
      ): Promise<string> => {
        return `coworkers(${transformed.join(",")})`;
      },
    },
  },
  Person: {
    transformer: async (
      originalData: Person,
      transformed: string
    ): Promise<string> => {
      return `Person(${transformed})`;
    },
  },
});

const SampleData: Person = {
  type: "FriendlyPerson",
  name: "Alice",
  bestFriend: {
    type: "FriendlyPerson",
    name: "Bob",
    friends: [],
  },
  friends: [
    {
      type: "WorkingPerson",
      name: "Charlie",
      occupations: ["Influencer"],
      coworkers: [
        {
          type: "WorkingPerson",
          name: "David",
          occupations: [],
        },
      ],
    },
  ],
};

friendNetworkToStringTraverser(SampleData, "Person").then((result: string) => {
  expect(result).toBe(
    "Person(FriendlyPerson-Alice(bestFriend(Person(FriendlyPerson-Bob(undefined, friends()))), friends(Person(WorkingPerson-Charlie(coworkers(WorkingPerson-David(undefined)))))))"
  );
});
