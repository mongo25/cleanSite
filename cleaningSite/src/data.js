import {
  reviewOne,
  reviewTwo,
  reviewThree,
  reviewFour,
  reviewFive,
} from "./assets";

export const reviewItems = [
  {
    id: 1,
    person: "Jessica Gomez",
    comment:
      "Incredible service! As a night-shift nurse, house cleaning takes a back seat. But their bi-weekly visits are a game changer. They focus on the hard-to-clean areas, leaving my home immaculate. Plus, their eco-friendly options are a big plus for me.",
    rating: 5,
    avatar: reviewTwo,
    address: "Morehand Cyprass",
  },
  {
    id: 2,
    person: "Eric Lee",
    comment:
      "Superb experience! I'm always on-the-go and their once-a-month cleaning keeps my studio apartment in perfect shape. The team is discreet and efficient, and they always respect my space. Their rates? Unbeatable for the quality they offer.",
    rating: 5,
    avatar: reviewOne,
    address: "Morehand Austin",
  },
  {
    id: 3,
    person: "Eric Lee",
    comment:
      "Superb experience! I'm always on-the-go and their once-a-month cleaning keeps my studio apartment in perfect shape. The team is discreet and efficient, and they always respect my space. Their rates? Unbeatable for the quality they offer.",
    rating: 5,
    avatar: reviewThree,
    address: "Morehand Cyprass",
  },
  {
    id: 4,
    person: "Julie Wertz",
    comment:
      "Highly recommend! With two toddlers at home, cleaning is a never-ending task. Their weekly service gives me a much-needed break. The team is friendly, and they handle everything with care. Plus, their flexibility with scheduling is a huge relief.",
    rating: 5,
    avatar: reviewFour,
    address: "Morehand Austin",
  },
  {
    id: 5,
    person: "Jessica Basa",
    comment:
      "A real lifesaver! Running a home business means little time for house chores. Their monthly deep cleaning service is thorough and efficient, especially in the kitchen. Also, their use of pet-safe products is much appreciated. Worth every penny!",
    rating: 5,
    avatar: reviewFive,
    address: "Morehand Cyprass",
  },
];

export const faqLists = [
  {
    id: "faq-1",
    heading: "Billing and pricing",
    faqItems: [
      {
        headingId: "head-11",
        collapseId: "collapse-11",
        title: "When do you charge my credit card?",
        description:
          "We charge all credit cards on the day of service, after the cleaning is finished.",
      },
      {
        headingId: "head-12",
        collapseId: "collapse-12",
        title: "What fees could I incur by canceling or rescheduling?",
        description:
          'We only charge fees when we really need to. If you cancel or reschedule an appointment after 3:00 pm the day before your cleaning, we may charge a $40 last-minute change fee. If you choose to cancel your recurring service before your second visit, we will charge you $69, to bring your pricing closer to our "one-time" service offering.',
      },
      {
        headingId: "head-13",
        collapseId: "collapse-13",
        title: "How do you determine my cleaning price?",
        description:
          "Your price depends on the size of your home, the number of pets you have, your frequency, and whatever add-on services you choose to include.",
      },
      {
        headingId: "head-14",
        collapseId: "collapse-14",
        title: "What if my home is really big (4,000+ sq. ft.)?",
        description:
          "Many clients with large homes prefer to order hourly service, and pick and choose which parts of the house they want us to clean on a visit-by-visit basis. That being said, a fixed price option is still available to you.",
      },
      {
        headingId: "head-15",
        collapseId: "collapse-15",
        title: "Is tipping expected?",
        description:
          "Tipping is entirely optional, but very much appreciated by your cleaning team.",
      },
    ],
  },
  {
    id: "faq-2",
    heading: "Appointments and scheduling",
    faqItems: [
      {
        headingId: "head-21",
        collapseId: "collapse-21",
        title: "How do I stop my recurring service?",
        description: "Email or call us. You can stop whenever you like.",
      },
      {
        headingId: "head-22",
        collapseId: "collapse-22",
        title: "Why can't I schedule a specific appointment time?",
        description:
          "We clean many homes a day, and it's impossible for us to know exactly how long each home cleaning will take. That's why we offer you a preferred window of time, instead of a specific appointment time. That being said, if you ever have specific scheduling needs, all you have to do is reach out to us, and we will do our very best to accommodate you.",
      },
      {
        headingId: "head-23",
        collapseId: "collapse-23",
        title: "How will I know when the maids are coming?",
        description:
          "We send ETA text messages, or notifications from our app, when we're on our way to your home.",
      },
      {
        headingId: "head-24",
        collapseId: "collapse-24",
        title: "What if I need to reschedule?",
        description:
          "No problem! You can reschedule in our app or via email. Make sure to reschedule by 3:00 pm the day before your cleaning, to avoid a last-minute rescheduling fee.",
      },
      {
        headingId: "head-25",
        collapseId: "collapse-25",
        title: "Will you ever cancel my appointment?",
        description:
          "Nope. We never cancel. Ever. If we do, we'll pay you $100, guaranteed. The only exception to this policy is in the case of a natural disaster.",
      },
    ],
  },
  {
    id: "faq-3",
    heading: "Home access",
    faqItems: [
      {
        headingId: "head-31",
        collapseId: "collapse-31",
        title: "How do the maids enter my home?",
        description:
          "You can either be at home to let them in, hide a key somewhere, or give us a lockbox code to keep on file.",
      },
    ],
  },
  {
    id: "faq-4",
    heading: "Your feedback",
    faqItems: [
      {
        headingId: "head-41",
        collapseId: "collapse-41",
        title: "How can I leave feedback?",
        description:
          "We ask for your feedback after every single visit, via email or in our app.",
      },
      {
        headingId: "head-42",
        collapseId: "collapse-42",
        title: "What if I'm not happy with my service?",
        description:
          "Your happiness is the reason we do our work. If you're not 100% satisfied with our services, we'll reach out to you, and find the way to make it right.",
      },
    ],
  },
  {
    id: "faq-5",
    heading: "Our Maid Service",
    faqItems: [
      {
        headingId: "head-21",
        collapseId: "collapse-21",
        title: "How do I stop my recurring service?",
        description: "Email or call us. You can stop whenever you like.",
      },
      {
        headingId: "head-22",
        collapseId: "collapse-22",
        title: "Why can't I schedule a specific appointment time?",
        description:
          "We clean many homes a day, and it's impossible for us to know exactly how long each home cleaning will take. That's why we offer you a preferred window of time, instead of a specific appointment time. That being said, if you ever have specific scheduling needs, all you have to do is reach out to us, and we will do our very best to accommodate you.",
      },
      {
        headingId: "head-23",
        collapseId: "collapse-23",
        title: "How will I know when the maids are coming?",
        description:
          "We send ETA text messages, or notifications from our app, when we're on our way to your home.",
      },
      {
        headingId: "head-24",
        collapseId: "collapse-24",
        title: "What if I need to reschedule?",
        description:
          "No problem! You can reschedule in our app or via email. Make sure to reschedule by 3:00 pm the day before your cleaning, to avoid a last-minute rescheduling fee.",
      },
      {
        headingId: "head-25",
        collapseId: "collapse-25",
        title: "Will you ever cancel my appointment?",
        description:
          "Nope. We never cancel. Ever. If we do, we'll pay you $100, guaranteed. The only exception to this policy is in the case of a natural disaster.",
      },
    ],
  },
];
