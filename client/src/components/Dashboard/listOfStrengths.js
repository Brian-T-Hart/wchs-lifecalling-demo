const listOfStrengths = [
	{
		id: 0,
		name: "Achiever",
		description: "People who are especially talented in the Achiever theme have a great deal of stamina and work hard. They take great satisfaction from being busy and productive.",
		strengthOfMine: false
	},
	{
		id: 1,
		name: "Activator",
		description: "People who are especially talented in the Activator theme can make things happen by turning thoughts into action. They are often impatient.",
		strengthOfMine: false
	},
	{
		id: 2,
		name: "Adaptability",
		description: "People who are especially talented in the Adaptability theme prefer to “go with the flow.” They tend to be “now” people who take things as they come and discover the future one day at a time.",
		strengthOfMine: false
	},
	{
		id: 3,
		name: "Analytical",
		description: "People who are especially talented in the Analytical theme search for reasons and causes. They have the ability to think about all the factors that might affect a situation.",
		strengthOfMine: false
	},
	{
		id: 4,
		name: "Arranger",
		description: "People who are especially talented in the Arranger theme can organize, but they also have a flexibility that complements this ability. They like to figure out how all of the pieces and resources can be arranged for maximum productivity.",
		strengthOfMine: false
	},
	{
		id: 5,
		name: "Belief",
		description: "People who are especially talented in the Belief theme have certain core values that are unchanging. Out of these values emerges a defined purpose for their life.",
		strengthOfMine: false
	},
	{
		id: 6,
		name: "Command",
		description: "People who are especially talented in the Command theme have presence. They can take control of a situation and make decisions.",
		strengthOfMine: false
	},
	{
		id: 7,
		name: "Communication",
		description: "People who are especially talented in the Communication theme generally find it easy to put their thoughts into words. They are good conversationalists and presenters.",
		strengthOfMine: false
	},
	{
		id: 8,
		name: "Competition",
		description: "People who are especially talented in the Competition theme measure their progress against the performance of others. They strive to win first place and revel in contests.",
		strengthOfMine: false
	},
	{
		id: 9,
		name: "Connectedness",
		description: "People who are especially talented in the Connectedness theme have faith in the links between all things. They believe there are few coincidences and that almost every event has a reason.",
		strengthOfMine: false
	},
	{
		id: 10,
		name: "Consistency",
		description: "People who are especially talented in the Consistency theme are keenly aware of the need to treat people the same. They try to treat everyone in the world with consistency by setting up clear rules and adhering to them.",
		strengthOfMine: false
	},
	{
		id: 11,
		name: "Context",
		description: "People who are especially talented in the Context theme enjoy thinking about the past. They understand the present by researching its history.",
		strengthOfMine: false
	},
	{
		id: 12,
		name: "Deliberative",
		description: "People who are especially talented in the Deliberative theme are best described by the serious care they take in making decisions or choices. They anticipate the obstacles.",
		strengthOfMine: false
	},
	{
		id: 13,
		name: "Developer",
		description: "People who are especially talented in the Developer theme recognize and cultivate the potential in others. They spot the signs of each small improvement and derive satisfaction from these improvements.",
		strengthOfMine: false
	},
	{
		id: 14,
		name: "Discipline",
		description: "People who are especially talented in the Discipline theme enjoy routine and structure. Their world is best described by the order they create.",
		strengthOfMine: false
	},
	{
		id: 15,
		name: "Empathy",
		description: "People who are especially talented in the Empathy theme can sense the feelings of other people by imagining themselves in others’ lives or others’ situations.",
		strengthOfMine: false
	},
	{
		id: 16,
		name: "Focus",
		description: "People who are especially talented in the Focus theme can take a direction, follow through, and make the corrections necessary to stay on track. They prioritize, then act.",
		strengthOfMine: false
	},
	{
		id: 17,
		name: "Futuristic",
		description: "People who are especially talented in the Futuristic theme are inspired by the future and what could be. They inspire others with their visions of the future.",
		strengthOfMine: false
	},
	{
		id: 18,
		name: "Harmony",
		description: "People who are especially talented in the Harmony theme look for consensus. They don’t enjoy conflict; rather, they seek areas of agreement.",
		strengthOfMine: false
	},
	{
		id: 19,
		name: "Ideation",
		description: "People who are especially talented in the Ideation theme are fascinated by ideas. They are able to find connections between seemingly disparate phenomena.",
		strengthOfMine: false
	},
	{
		id: 20,
		name: "Includer",
		description: "People who are especially talented in the Includer theme are accepting of others. They show awareness of those who feel left out, and make an effort to include them.",
		strengthOfMine: false
	},
	{
		id: 21,
		name: "Individualization",
		description: "People who are especially talented in the Individualization theme are intrigued with the unique qualities of each person. They have a gift for figuring out how people who are different can work together productively.",
		strengthOfMine: false
	},
	{
		id: 22,
		name: "Input",
		description: "People who are especially talented in the Input theme have a craving to know more. Often they like to collect and archive all kinds of information.",
		strengthOfMine: false
	},
	{
		id: 23,
		name: "Intellection",
		description: "People who are especially talented in the Intellection theme are characterized by their intellectual activity. They are introspective and appreciate intellectual discussions.",
		strengthOfMine: false
	},
	{
		id: 24,
		name: "Learner",
		description: "People who are especially talented in the Learner theme have a great desire to learn and want to continuously improve. In particular, the process of learning, rather than the outcome, excites them.",
		strengthOfMine: false
	},
	{
		id: 25,
		name: "Maximizer",
		description: "People who are especially talented in the Maximizer theme focus on strengths as a way to stimulate personal and group excellence. They seek to transform something strong into something superb.",
		strengthOfMine: false
	},
	{
		id: 26,
		name: "Positivity",
		description: "People who are especially talented in the Positivity theme have an enthusiasm that is contagious. They are upbeat and can get others excited about what they are going to do.",
		strengthOfMine: false
	},
	{
		id: 27,
		name: "Relator",
		description: "People who are especially talented in the Relator theme enjoy close relationships with others. They find deep satisfaction in working hard with friends to achieve a goal.",
		strengthOfMine: false
	},
	{
		id: 28,
		name: "Responsibility",
		description: "People who are especially talented in the Responsibility theme take psychological ownership of what they say they will do. They are committed to stable values such as honesty and loyalty.",
		strengthOfMine: false
	},
	{
		id: 29,
		name: "Restorative",
		description: "People who are especially talented in the Restorative theme are adept at dealing with problems. They are good at figuring out what is wrong and resolving it.",
		strengthOfMine: false
	},
	{
		id: 30,
		name: "Self-Assurance",
		description: "People who are especially talented in the Self-Assurance theme feel confident in their ability to manage their own lives. They possess an inner compass that gives them confidence that their decisions are right.",
		strengthOfMine: false
	},
	{
		id: 31,
		name: "Significance",
		description: "People who are especially talented in the Significance theme want to be very important in the eyes of others. They are independent and want to be recognized.",
		strengthOfMine: false
	},
	{
		id: 32,
		name: "Strategic",
		description: "People who are especially talented in the Strategic theme create alternative ways to proceed. Faced with any given scenario, they can quickly spot the relevant patterns and issues.",
		strengthOfMine: false
	},
	{
		id: 33,
		name: "Woo",
		description: "People who are especially talented in the Woo theme love the challenge of meeting new people and winning them over. They derive satisfaction from breaking the ice and making a connection with another person.",
		strengthOfMine: false
	}
]

export default listOfStrengths;