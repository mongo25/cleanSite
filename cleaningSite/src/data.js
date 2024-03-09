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
        headingId: "head-51",
        collapseId: "collapse-51",
        title: "How many housekeepers do you send to clean?",
        description:
          "Two – but it depends on your home and your needs. On rare occasions, we send teams of three or four.",
      },
      {
        headingId: "head-52",
        collapseId: "collapse-52",
        title: "Do I need to provide supplies?",
        description:
          "Nope – we provide all of our own supplies and equipment. If you prefer we use your items, please let the office know beforehand.",
      },
      {
        headingId: "head-53",
        collapseId: "collapse-53",
        title: "Do I need to do anything before the housekeepers arrive?",
        description:
          "Yes, please – to make our services more efficient, we ask that you pick up clothing, toys, and other household items before the cleaning.",
      },
      {
        headingId: "head-54",
        collapseId: "collapse-54",
        title: "Can I request the same housekeepers each visit?",
        description:
          "Yup – we will make every effort to have the same team clean your home each visit. However, due to illness, vacations or days off, we can't guarantee it.",
      },
      {
        headingId: "head-55",
        collapseId: "collapse-55",
        title: "Do I need to do anything to prepare for a move-out clean?",
        description:
          "Yes, please – we need electricity and water to clean, so please make sure your utilities are still functioning.",
      },
      {
        headingId: "head-56",
        collapseId: "collapse-56",
        title: "What won't MoreHands teams clean?",
        description:
          "For health reasons, our teams will not clean blood, feces, vomit, or urine from animals or humans.",
      },
    ],
  },
  {
    id: "faq-6",
    heading: "Our errand service",
    faqItems: [
      {
        headingId: "head-61",
        collapseId: "collapse-61",
        title: "How can I order an errand?",
        description:
          "Once you've ordered weekly, biweekly, or monthly cleanings, you can download the MoreHands app to get started ordering errands.",
      },
      {
        headingId: "head-62",
        collapseId: "collapse-62",
        title: "What kinds of errands do you run?",
        description:
          "All kinds. Post office, Target, HEB, the mall, your friend's house – seriously, we go anywhere (within a 10 mile radius of your home, more or less).",
      },
      {
        headingId: "head-63",
        collapseId: "collapse-63",
        title:
          "Why does an errand cost $10 or less – how can I get a lower price?",
        description:
          "You can order errands for today, tomorrow, or in two days. Get notifications when your neighbors start an errand, and join their run for a community price. Today, $10. Tomorrow, $5. Two days, $3. Community run, $3",
      },
      {
        headingId: "head-64",
        collapseId: "collapse-64",
        title: "How do community runs work?",
        description:
          "Once someone in your neighborhood starts an errand, we'll send you a notification to let you know we're headed to Target, HEB, or wherever they need us to go. Join the errand in the app, and we'll pick up whatever you need while we're at it, and deliver it to you for $3.",
      },
    ],
  },
  {
    id: "faq-7",
    heading: "MoreHands staff",
    faqItems: [
      {
        headingId: "head-71",
        collapseId: "collapse-71",
        title: "Do you use contract labor?",
        description:
          "Nope. All our employees are full-time, five-star, MoreHands employees.",
      },
      {
        headingId: "head-72",
        collapseId: "collapse-72",
        title: "Do you pay your employees well?",
        description:
          "Yup. All staff earn a living wage. We provide full benefits, including medical, dental, and life insurance, paid vacation, and monthly and holiday bonuses for a job well done.",
      },
      {
        headingId: "head-73",
        collapseId: "collapse-73",
        title: "How else do you take care of your staff?",
        description:
          "We organize team building events, official recognition for high-quality work, and maintain a scholarship fund for employees' children. All vehicles, equipment, supplies, and uniforms are provided by the company, and we always maintain a respectful, professional, and inclusive work environment.",
      },
    ],
  },
  {
    id: "faq-8",
    heading: "General wash/fold questions",
    faqItems: [
      {
        headingId: "head-81",
        collapseId: "collapse-81",
        title:
          "How do you handle my clothes during the washing and drying process?",
        description:
          "Our team follows best practices when handling your clothes, including separating lights from darks, using cold water for washing, and medium heat for drying.",
      },
      {
        headingId: "head-82",
        collapseId: "collapse-82",
        title: "What detergent and dryer sheet options do I have?",
        description:
          "You can choose between scented or hypoallergenic detergent, and opt for dryer sheets or go without them.",
      },
      {
        headingId: "head-83",
        collapseId: "collapse-83",
        title: "Do I need to separate whites and colors?",
        description:
          "No need to worry! We handle the sorting for all wash and fold laundry, ensuring your whites are never washed with colors.",
      },
      {
        headingId: "head-84",
        collapseId: "collapse-84",
        title: "Who handles my laundry and organizes it in my home?",
        description:
          "As your trusted maid service, our employees are the only ones who handle, clean, and organize your clothes, as well as enter your home for pick-up and putting away your clean laundry.",
      },
    ],
  },
  {
    id: "faq-9",
    heading: "Pick up and delivery",
    faqItems: [
      {
        headingId: "head-91",
        collapseId: "collapse-91",
        title: "Do I need to be home for pickup and delivery?",
        description:
          "No, you don't need to be home. Our staff will use the same method to enter your home for pickup and delivery as we do for cleaning services.",
      },
      {
        headingId: "head-92",
        collapseId: "collapse-92",
        title: "What detergent and dryer sheet options do I have?",
        description:
          "You can choose between scented or hypoallergenic detergent, and opt for dryer sheets or go without them.",
      },
      {
        headingId: "head-93",
        collapseId: "collapse-93",
        title: "Do I need to separate whites and colors?",
        description:
          "No need to worry! We handle the sorting for all wash and fold laundry, ensuring your whites are never washed with colors.",
      },
      {
        headingId: "head-94",
        collapseId: "collapse-94",
        title: "Who handles my laundry and organizes it in my home?",
        description:
          "As your trusted maid service, our employees are the only ones who handle, clean, and organize your clothes, as well as enter your home for pick-up and putting away your clean laundry.",
      },
    ],
  },
  {
    id: "faq-10",
    heading: "Hanging drawers and how we organize your clothes",
    faqItems: [
      {
        headingId: "head-101",
        collapseId: "collapse-101",
        title: "Do I need to be home for pickup and delivery?",
        description:
          "No, you don't need to be home. Our staff will use the same method to enter your home for pickup and delivery as we do for cleaning services.",
      },
      {
        headingId: "head-102",
        collapseId: "collapse-102",
        title: "What detergent and dryer sheet options do I have?",
        description:
          "You can choose between scented or hypoallergenic detergent, and opt for dryer sheets or go without them.",
      },
      {
        headingId: "head-103",
        collapseId: "collapse-103",
        title: "Do I need to separate whites and colors?",
        description:
          "No need to worry! We handle the sorting for all wash and fold laundry, ensuring your whites are never washed with colors.",
      },
      {
        headingId: "head-104",
        collapseId: "collapse-104",
        title: "Who handles my laundry and organizes it in my home?",
        description:
          "As your trusted maid service, our employees are the only ones who handle, clean, and organize your clothes, as well as enter your home for pick-up and putting away your clean laundry.",
      },
    ],
  },
];

export const serviceFaqLists = {
  id: "service-1",
  faqItems: [
    {
      title: "What's included in a basic cleaning?",
      isList: true,
      headingId: "head-s11",
      collapseId: "collapse-s11",

      lists: [
        {
          id: "s11",
          col: 3,
          title: "Everywhere",
          list: [
            "Vacuum carpets",
            "Dust ceiling fans",
            "Dust furniture",
            "Dust window sills",
            "Polish furniture",
            "Take out trash",
            "Sanitize light switches",
            "Sweep and mop floors",
          ],
        },
        {
          id: "s12",
          col: 3,
          title: "Bathrooms",
          list: [
            "Scrub and disinfect toilets",
            "Scrub and disinfect tubs",
            "Scrub and disinfect showers",
            "Scrub and disinfect sinks",
            "Scrub and disinfect counters",
            "Clean mianirrors",
            "Polish chrome",
          ],
        },
        {
          id: "s13",
          col: 3,
          title: "Kitchen",
          list: [
            "Scrub and sanitize sinks",
            "Scrub and sanitize counters",
            "Clean other surfaces",
            "Clean outside appliances",
            "Clean inside microwave",
            "Place dishes in dishwasher",
          ],
        },
        {
          id: "s14",
          col: 3,
          title: "Bedrooms",
          list: ["Make beds", "Change linens"],
        },
      ],
    },
  ],
};
