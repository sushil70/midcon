import HomePage from "./homePage";

export default function Home() {
  // const [categories] = useState({
  //   "Staying Safe Online": {
  //     icon: <Shield className="w-6 h-6" />,
  //     introduction:
  //       "As our daily activities increasingly move online—shopping, banking, communicating, and working—it's crucial to ensure our personal information is secure. Cyber threats evolve rapidly, and even seemingly small mistakes can lead to serious breaches of privacy. Here's a thorough breakdown of how to stay safe:",
  //     topics: [
  //       {
  //         title: "Use Strong and Unique Passwords",
  //         content: [
  //           {
  //             subtitle: "Why It Matters",
  //             text: "Passwords are often the only barrier between your private data and a hacker. Weak passwords can easily be guessed or cracked using automated methods like brute-force attacks.",
  //           },
  //           {
  //             subtitle: "How to Create a Strong Password",
  //             text: "Your password should be at least 12-16 characters long and include a mix of upper and lowercase letters, numbers, and special characters. Avoid common words or sequences like '12345' or 'password'.",
  //           },
  //           {
  //             subtitle: "Password Tips",
  //             list: [
  //               "Never reuse passwords across different accounts. If one account is compromised, others using the same password can quickly fall prey.",
  //               "Avoid using easy-to-guess personal information such as your name, birthdate, or pet names.",
  //               "Use a passphrase—a series of random words or a memorable sentence that's harder to guess but easy for you to remember.",
  //               "Tools like password managers (LastPass, Dashlane, or 1Password) can generate and store complex passwords, ensuring each of your accounts has a unique one. These tools also autofill login details, preventing phishing attacks from misdirecting you to fake websites.",
  //             ],
  //           },
  //         ],
  //       },
  //       {
  //         title: "Enable Two-Factor Authentication (2FA)",
  //         content: [
  //           {
  //             subtitle: "What Is 2FA?",
  //             text: "Two-factor authentication adds an extra step beyond just your password. Even if someone gets access to your password, 2FA will require a second form of verification, like a code sent to your phone or an authentication app.",
  //           },
  //           {
  //             subtitle: "Types of 2FA",
  //             list: [
  //               "SMS-based 2FA: This sends a code to your phone via text message. While effective, it can be vulnerable to SIM-swapping attacks, so consider using stronger methods.",
  //               "App-based 2FA: Apps like Google Authenticator, Authy, or Microsoft Authenticator generate time-sensitive codes that change every 30 seconds.",
  //               "Hardware tokens: Devices like Yubikey are physical keys that plug into your computer, offering one of the most secure 2FA options available.",
  //             ],
  //           },
  //           {
  //             subtitle: "Where to Use 2FA",
  //             text: "Enable 2FA on all accounts that support it, particularly for email, social media, banking, and any account holding sensitive information.",
  //           },
  //         ],
  //       },
  //       {
  //         title: "Beware of Phishing Scams",
  //         content: [
  //           {
  //             subtitle: "What Is Phishing?",
  //             text: "Phishing is a form of fraud where attackers pose as trustworthy entities (banks, employers, online services) to trick you into revealing sensitive information like passwords, credit card numbers, or Social Security numbers.",
  //           },
  //           {
  //             subtitle: "How to Spot Phishing Emails",
  //             list: [
  //               "Look for poor grammar, misspellings, or awkward phrasing.",
  //               "Be cautious if the email comes from a strange email address or one slightly off from a legitimate domain (e.g., support@amaz0n.com instead of support@amazon.com).",
  //               "Be wary of emails that create a sense of urgency, claiming your account will be locked unless you act immediately.",
  //               "Never click on a link in a suspicious email—hover over it to see if the URL matches the official website.",
  //               "Use browser extensions like Web of Trust (WOT) or Norton Safe Web to flag phishing websites automatically.",
  //             ],
  //           },
  //           {
  //             subtitle: "How to Respond",
  //             text: "If you receive a phishing email, do not respond or click on any links. Report the phishing attempt to the relevant service provider or authority (e.g., your bank or Google).",
  //           },
  //         ],
  //       },
  //       {
  //         title: "Keep Software Updated",
  //         content: [
  //           {
  //             subtitle: "Importance of Updates",
  //             text: "Software updates often include patches for known security vulnerabilities. Delaying updates can leave you exposed to hackers who exploit these gaps.",
  //           },
  //           {
  //             subtitle: "What to Update",
  //             list: [
  //               "Operating systems (Windows, macOS, Linux)",
  //               "Web browsers (Chrome, Firefox, Safari)",
  //               "Apps and programs, especially antivirus software and firewalls",
  //               "Devices like routers, smart home systems, and Internet of Things (IoT) devices, which often have weak default security settings.",
  //             ],
  //           },
  //           {
  //             subtitle: "Automation",
  //             text: "Enable automatic updates whenever possible, so you don't miss crucial patches. If you're concerned about stability, configure updates to run during off-hours, such as overnight.",
  //           },
  //         ],
  //       },
  //       {
  //         title: "Use a VPN on Public Wi-Fi",
  //         content: [
  //           {
  //             subtitle: "Why You Need a VPN",
  //             text: "Public Wi-Fi in cafes, airports, hotels, and libraries is often unsecured, making it easy for hackers to intercept your data. A VPN (Virtual Private Network) encrypts your internet connection, protecting your personal data from snooping.",
  //           },
  //           {
  //             subtitle: "How VPNs Work",
  //             text: "VPNs reroute your internet traffic through a secure server, hiding your IP address and encrypting your data. This ensures that even if a hacker is spying on the network, they can't read your data.",
  //           },
  //           {
  //             subtitle: "Best VPN Providers",
  //             text: "Services like ExpressVPN, NordVPN, and CyberGhost offer robust security, fast speeds, and no-log policies, ensuring your online activity stays private.",
  //           },
  //           {
  //             subtitle: "Extra Tips",
  //             text: "When using public Wi-Fi, avoid accessing sensitive information like online banking or making purchases unless you're connected through a VPN.",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   "Productivity Tips for Remote Work": {
  //     icon: <Briefcase className="w-6 h-6" />,
  //     introduction:
  //       "Remote work offers freedom and flexibility, but it also requires discipline and organization to remain productive. Below are detailed strategies to help you stay focused, efficient, and balanced.",
  //     topics: [
  //       {
  //         title: "Create a Dedicated Workspace",
  //         content: [
  //           {
  //             subtitle: "Why It's Important",
  //             text: "Having a designated workspace helps create a mental boundary between your work and home life, reducing distractions and improving focus.",
  //           },
  //           {
  //             subtitle: "Setting Up Your Workspace",
  //             list: [
  //               "Choose a quiet area with minimal distractions, preferably away from common areas like the living room or kitchen.",
  //               "Invest in ergonomic furniture—a good chair, desk, and proper lighting reduce physical strain and help you maintain focus.",
  //               "Keep your workspace tidy. A cluttered space can lead to a cluttered mind, reducing productivity.",
  //               "Personalize your workspace with motivational quotes, greenery (plants improve air quality), and personal items that boost your mood.",
  //             ],
  //           },
  //           {
  //             subtitle: "Digital Workspaces",
  //             text: "Organize your digital workspace with tools like Notion, Trello, or Slack to streamline task management and communication with colleagues.",
  //           },
  //         ],
  //       },
  //       {
  //         title: "Time Management Techniques",
  //         content: [
  //           {
  //             subtitle: "Pomodoro Technique",
  //             list: [
  //               "How It Works: Work for 25 minutes, then take a 5-minute break. After four cycles, take a longer break (15-30 minutes). This method helps maintain focus and prevents burnout.",
  //               "Tools: Use apps like Focus Booster or TomatoTimer to set up your Pomodoro cycles.",
  //             ],
  //           },
  //           {
  //             subtitle: "Time Blocking",
  //             list: [
  //               "What It Is: Time blocking involves scheduling tasks for specific time slots throughout the day. For example, you might reserve 9-11 AM for deep work, 11-12 PM for emails, and 2-3 PM for meetings.",
  //               "How to Apply It: Use calendar apps like Google Calendar or Microsoft Outlook to block out time for specific tasks, ensuring that you dedicate focused effort to each.",
  //               "Timeboxing: This is a variation of time blocking, where you allocate a specific time limit to a task to prevent it from expanding indefinitely.",
  //             ],
  //           },
  //           {
  //             subtitle: "Eisenhower Matrix",
  //             list: [
  //               "What It Is: This time-management strategy helps you prioritize tasks by urgency and importance. Tasks are sorted into four quadrants:",
  //               "- Urgent and Important: Do it immediately.",
  //               "- Important but Not Urgent: Schedule it.",
  //               "- Urgent but Not Important: Delegate it.",
  //               "- Neither Urgent Nor Important: Eliminate it.",
  //               "How to Apply: Each morning, list tasks for the day and categorize them based on the Eisenhower Matrix. This helps prioritize work and ensures important tasks are completed first.",
  //             ],
  //           },
  //         ],
  //       },
  //       {
  //         title: "Take Regular Breaks",
  //         content: [
  //           {
  //             subtitle: "The Science of Breaks",
  //             text: "Research shows that taking short breaks during work can improve focus, reduce mental fatigue, and boost creativity.",
  //           },
  //           {
  //             subtitle: "Types of Breaks",
  //             list: [
  //               "Microbreaks (30 seconds to 2 minutes): Stand up, stretch, or look away from your screen.",
  //               "Short Breaks (5-15 minutes): Step outside for fresh air, grab a snack, or do some light exercise.",
  //               "Long Breaks (15-30 minutes): After several hours of work, take a longer break for lunch, meditation, or a walk to reset your mind.",
  //             ],
  //           },
  //           {
  //             subtitle: "Tools for Tracking Breaks",
  //             text: "Apps like BreakTimer or Stretchly remind you to take breaks and provide suggestions for physical exercises or mental relaxation during those breaks.",
  //           },
  //         ],
  //       },
  //       {
  //         title: "Set Clear and Realistic Goals",
  //         content: [
  //           {
  //             subtitle: "SMART Goals",
  //             list: [
  //               "Specific: Clearly define what you want to accomplish.",
  //               "Measurable: Include criteria to track progress.",
  //               "Achievable: Ensure the goal is realistic and attainable.",
  //               "Relevant: Align the goal with your larger objectives.",
  //               "Time-Bound: Set a deadline to maintain focus.",
  //             ],
  //           },
  //           {
  //             subtitle: "Daily Goal Setting",
  //             text: "Each day, write down 3-5 primary goals. Review your progress at the end of the day and adjust for tomorrow.",
  //           },
  //           {
  //             subtitle: "Long-Term Planning",
  //             text: "Break down large projects into manageable chunks. Use milestone tracking (e.g., 30-day, 90-day plans) to monitor progress on long-term goals.",
  //           },
  //           {
  //             subtitle: "Task Management Tools",
  //             text: "Platforms like Todoist, Microsoft To-Do, and Asana allow you to set goals, track progress, and collaborate with team members.",
  //           },
  //         ],
  //       },
  //       {
  //         title: "Minimize Digital Distractions",
  //         content: [
  //           {
  //             subtitle: "Identify Your Distractions",
  //             list: [
  //               "Common distractions include social media, personal emails, non-work-related websites, and instant messaging.",
  //               "Take a digital audit to identify which distractions consume most of your time. For example, track how often you check your phone or social media during work hours.",
  //             ],
  //           },
  //           {
  //             subtitle: "Tools to Block Distractions",
  //             list: [
  //               "Freedom: Blocks distracting websites across devices, allowing you to focus on work.",
  //               "Cold Turkey: Another website blocker that lets you schedule blocks of time where certain websites or apps are inaccessible.",
  //               "Focus@Will: A productivity tool that uses scientifically optimized music to boost focus and concentration during work.",
  //             ],
  //           },
  //         ],
  //       },
  //       {
  //         title: "Collaborating with Remote Teams",
  //         content: [
  //           {
  //             subtitle: "Communication Tools",
  //             text: "Use apps like Slack, Zoom, or Microsoft Teams to maintain clear and open communication with colleagues.",
  //           },
  //           {
  //             subtitle: "Asynchronous Communication",
  //             text: "In remote work, not everyone will be online at the same time. Use tools like Loom for recording short video messages or Notion for team documentation, allowing everyone to access information at their own convenience.",
  //           },
  //           {
  //             subtitle: "Set Expectations",
  //             text: "Ensure your team has clear expectations for deadlines, availability, and communication. Use shared calendars and task boards (e.g., Trello, Monday.com) to keep everyone on the same page.",
  //           },
  //           {
  //             subtitle: "Regular Check-ins",
  //             text: "Schedule regular team meetings or 1:1s to ensure everyone feels connected, supported, and aligned on goals.",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   "Financial Literacy": {
  //     icon: <DollarSign className="w-6 h-6" />,
  //     introduction:
  //       "Achieving financial independence requires knowledge, planning, and disciplined action. Below is an exhaustive guide to personal finance, including budgeting, saving, debt management, and investing.",
  //     topics: [
  //       {
  //         title: "Creating a Realistic Budget",
  //         content: [
  //           {
  //             subtitle: "Why Budgeting Is Important",
  //             text: "Budgeting helps you control your money, track your spending, and avoid debt. It gives you a clear understanding of where your money is going and highlights areas where you can save.",
  //           },
  //           {
  //             subtitle: "Types of Budgeting",
  //             list: [
  //               "50/30/20 Rule: Allocate 50% of your income to needs (housing, utilities, groceries), 30% to wants (dining out, entertainment), and 20% to savings and debt repayment.",
  //               "Zero-Based Budgeting: Every dollar is assigned a purpose. At the end of the month, income minus expenses (including savings) should equal zero.",
  //               "Envelope System: Physically separate money into envelopes for each category (e.g., groceries, entertainment). Once an envelope is empty, you can't spend more in that category until the next pay period.",
  //             ],
  //           },
  //           {
  //             subtitle: "How to Create a Budget",
  //             list: [
  //               "Start by tracking your spending for a month to identify your current habits.",
  //               "Categorize your expenses (housing, transportation, food, debt repayment, entertainment).",
  //               "Compare your spending to your income. If you're spending more than you earn, identify areas where you can cut back.",
  //               "Use tools like Mint, YNAB (You Need A Budget), or EveryDollar to track your budget automatically.",
  //             ],
  //           },
  //           {
  //             subtitle: "Budgeting Pitfalls",
  //             list: [
  //               "Underestimating Irregular Expenses: These are expenses that don't occur monthly but are significant when they do (e.g., car repairs, holiday gifts). Set aside money for these by averaging their cost over the year.",
  //               "Lifestyle Inflation: As your income grows, resist the temptation to increase  your spending on luxuries. Instead, save or invest the extra income to grow your wealth.",
  //             ],
  //           },
  //         ],
  //       },
  //       {
  //         title: "Building an Emergency Fund",
  //         content: [
  //           {
  //             subtitle: "What Is an Emergency Fund?",
  //             text: "An emergency fund is a savings cushion to cover unexpected expenses, such as medical bills, car repairs, or job loss. It prevents you from relying on high-interest debt when emergencies arise.",
  //           },
  //           {
  //             subtitle: "How Much to Save",
  //             text: "Most financial experts recommend saving 3-6 months' worth of living expenses. However, this depends on your personal situation. If you have dependents or an irregular income, you might aim for a 6-12 month emergency fund.",
  //           },
  //           {
  //             subtitle: "Where to Keep It",
  //             text: "Store your emergency fund in a liquid and easily accessible account, such as a high-yield savings account. Avoid investing it in the stock market, as market volatility could reduce the fund's value right when you need it most.",
  //           },
  //           {
  //             subtitle: "How to Build It",
  //             list: [
  //               "Start small: Even saving $10 or $20 per week can add up over time.",
  //               "Automate your savings: Set up automatic transfers from your checking account to your emergency fund after every paycheck.",
  //               "Cut non-essential expenses: Redirect money from unnecessary spending (e.g., dining out, subscriptions) into your emergency fund.",
  //             ],
  //           },
  //         ],
  //       },
  //       {
  //         title: "Tackling High-Interest Debt",
  //         content: [
  //           {
  //             subtitle: "Why Debt Matters",
  //             text: "High-interest debt, like credit cards or payday loans, can spiral out of control due to compounding interest, making it harder to achieve financial independence.",
  //           },
  //           {
  //             subtitle: "Debt Payoff Strategies",
  //             list: [
  //               "Debt Avalanche: Focus on paying off the debt with the highest interest rate first while making minimum payments on other debts. Once the highest interest debt is paid, move on to the next highest, saving you money on interest over time.",
  //               "Debt Snowball: Pay off the smallest debt first, regardless of interest rate, then move on to the next smallest. This method provides psychological motivation, as you quickly eliminate small debts and build momentum.",
  //               "Debt Consolidation: If you have multiple debts with high-interest rates, consider consolidating them into one loan with a lower interest rate. This can simplify your payments and reduce the overall interest you pay.",
  //             ],
  //           },
  //           {
  //             subtitle: "Avoiding Debt Traps",
  //             list: [
  //               "Always pay more than the minimum payment on your credit cards to avoid accumulating interest.",
  //               "Avoid payday loans, which come with extraordinarily high interest rates and fees. Instead, seek out lower-interest personal loans or negotiate payment plans with creditors.",
  //               "If you're struggling to manage your debt, consider working with a nonprofit credit counselor who can help you develop a repayment plan.",
  //             ],
  //           },
  //         ],
  //       },
  //       {
  //         title: "Start Investing Early",
  //         content: [
  //           {
  //             subtitle: "Why It's Important",
  //             text: "The sooner you start investing, the more time your money has to grow through the power of compound interest. Compound interest allows your investments to earn returns on both the principal and the interest that accumulates over time.",
  //           },
  //           {
  //             subtitle: "Types of Investment Accounts",
  //             list: [
  //               "401(k): A retirement account offered by many employers. Contributions are pre-tax, meaning you reduce your taxable income. Many employers offer a match—free money that grows your retirement savings.",
  //               "Roth IRA: An individual retirement account where contributions are made after-tax, but withdrawals in retirement are tax-free.",
  //               "Brokerage Account: A taxable account that allows you to invest in stocks, bonds, mutual funds, and ETFs. There are no contribution limits, and you can withdraw funds at any time, though you'll pay taxes on capital gains.",
  //             ],
  //           },
  //           {
  //             subtitle: "Low-Cost Index Funds",
  //             text: "For long-term investors, index funds are a great option. They track a market index (e.g., S&P 500) and have lower fees compared to actively managed funds. Over time, they tend to perform better than trying to pick individual stocks.",
  //           },
  //           {
  //             subtitle: "Diversification",
  //             text: "Don't put all your eggs in one basket. Spread your investments across different asset classes (stocks, bonds, real estate) to minimize risk. Use the 80/20 Rule: The percentage of your portfolio in stocks should be 100 minus your age. So, if you're 30 years old, invest 70-80% in stocks and the remainder in bonds.",
  //           },
  //           {
  //             subtitle: "Robo-Advisors",
  //             text: "If you're unsure where to start, consider using a robo-advisor like Betterment or Wealthfront. These platforms use algorithms to manage your investments based on your risk tolerance and financial goals, and they typically charge lower fees than traditional financial advisors.",
  //           },
  //         ],
  //       },
  //       {
  //         title: "Live Below Your Means",
  //         content: [
  //           {
  //             subtitle: "What It Means",
  //             text: "Living below your means involves spending less than you earn and saving or investing the difference. This helps you avoid debt, build wealth, and achieve financial independence.",
  //           },
  //           {
  //             subtitle: "How to Do It",
  //             list: [
  //               "Avoid lifestyle inflation: As your income increases, resist the urge to upgrade your lifestyle (e.g., moving to a bigger home, buying a new car).",
  //               "Buy quality over quantity: Spending a little more upfront on high-quality items (clothing, electronics, appliances) can save money in the long run by reducing the need for frequent replacements.",
  //               "Delay gratification: Instead of making impulse purchases, wait 24 hours before deciding to buy. This gives you time to evaluate whether the item is truly necessary.",
  //               "Focus on needs, not wants: Prioritize spending on essential items (e.g., housing, food, transportation) and limit spending on non-essential items (e.g., dining out, vacations, entertainment).",
  //             ],
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   "Health and Wellness": {
  //     icon: <Heart className="w-6 h-6" />,
  //     introduction:
  //       "Achieving a healthy lifestyle involves maintaining a balance between physical, mental, and emotional well-being. Here's a detailed look at how to improve each aspect.",
  //     topics: [
  //       {
  //         title: "Staying Hydrated",
  //         content: [
  //           {
  //             subtitle: "Why It Matters",
  //             text: "Water is essential for every cell, tissue, and organ in your body. Staying hydrated improves energy levels, brain function, and overall physical performance.",
  //           },
  //           {
  //             subtitle: "How Much Water You Need",
  //             text: "While the classic recommendation is 8 cups a day, water needs vary based on your body weight, activity level, and climate. A better estimate is to drink half of your body weight in ounces of water per day. For example, if you weigh 150 pounds, aim for 75 ounces (about 9 cups) of water daily.",
  //           },
  //           {
  //             subtitle: "Hydration Tips",
  //             list: [
  //               "Carry a reusable water bottle to remind yourself to drink water throughout the day.",
  //               "Flavor your water with lemon, cucumber, or mint if you find plain water boring.",
  //               "Track your water intake using apps like MyFitnessPal or Hydro Coach.",
  //             ],
  //           },
  //         ],
  //       },
  //       {
  //         title: "Balanced Nutrition",
  //         content: [
  //           {
  //             subtitle: "Why It Matters",
  //             text: "A balanced diet provides the nutrients your body needs to function optimally, supporting immune health, energy levels, and overall well-being.",
  //           },
  //           {
  //             subtitle: "What to Include",
  //             list: [
  //               "Macronutrients: Ensure you're getting a balance of carbohydrates (whole grains, fruits), proteins (lean meats, legumes), and fats (avocados, nuts, olive oil).",
  //               "Micronutrients: Vitamins and minerals are essential for various bodily functions. Ensure you're eating a wide variety of colorful fruits and vegetables to get a full spectrum of nutrients.",
  //               "Fiber: Fiber aids digestion, regulates blood sugar, and helps maintain a healthy weight. Sources include vegetables, fruits, whole grains, and legumes.",
  //               "Water-Rich Foods: Fruits and vegetables like cucumbers, watermelon, and spinach are naturally high in water content and contribute to hydration.",
  //             ],
  //           },
  //           {
  //             subtitle: "Meal Planning",
  //             list: [
  //               "Plan your meals for the week to ensure you're eating a balanced diet and to avoid unhealthy, last-minute food choices.",
  //               "Cook at home more often. Home-cooked meals tend to be healthier and cheaper than eating out. Try using batch cooking techniques on weekends to prepare meals for the week ahead.",
  //               "Avoid highly processed foods, which tend to be high in added sugars, unhealthy fats, and sodium.",
  //             ],
  //           },
  //         ],
  //       },
  //       {
  //         title: "Exercise Regularly",
  //         content: [
  //           {
  //             subtitle: "Why Exercise Matters",
  //             text: "Physical activity strengthens your heart, improves circulation, reduces stress, and boosts mental clarity. It also helps maintain a healthy weight and prevent chronic diseases such as heart disease, diabetes, and cancer.",
  //           },
  //           {
  //             subtitle: "Types of Exercise",
  //             list: [
  //               "Cardiovascular Exercise: Activities like walking, running, swimming, and cycling improve heart health and burn calories.",
  //               "Strength Training: Resistance exercises like weightlifting, bodyweight exercises, or resistance bands build muscle mass and strengthen bones.",
  //               "Flexibility and Mobility: Stretching, yoga, and Pilates enhance flexibility and prevent injury by improving joint mobility and range of motion.",
  //             ],
  //           },
  //           {
  //             subtitle: "How Much Exercise You Need",
  //             list: [
  //               "Aim for at least 150 minutes of moderate-intensity aerobic exercise (e.g., brisk walking) or 75 minutes of vigorous-intensity exercise (e.g., running) per week.",
  //               "Include strength training exercises for all major muscle groups at least two days per week.",
  //             ],
  //           },
  //           {
  //             subtitle: "Exercise Tips",
  //             list: [
  //               "Start small and build up. If you're new to exercise, begin with 10-minute walks and gradually increase the duration and intensity.",
  //               "Make exercise a habit by scheduling it into your day, just like any other important task.",
  //               "Track your progress using fitness apps like Fitbit, Strava, or MyFitnessPal.",
  //             ],
  //           },
  //         ],
  //       },
  //       {
  //         title: "Prioritize Sleep",
  //         content: [
  //           {
  //             subtitle: "Why Sleep Matters",
  //             text: "Quality sleep is vital for cognitive function, emotional well-being, and physical health. Lack of sleep can lead to fatigue, irritability, and impaired decision-making, while chronic sleep deprivation is linked to serious health issues like obesity, heart disease, and diabetes.",
  //           },
  //           {
  //             subtitle: "How Much Sleep You Need",
  //             list: [
  //               "Adults should aim for 7-9 hours of sleep per night.",
  //               "Teenagers need 8-10 hours, while younger children require even more.",
  //             ],
  //           },
  //           {
  //             subtitle: "Tips for Better Sleep",
  //             list: [
  //               "Establish a consistent sleep schedule, going to bed and waking up at the same time every day, even on weekends.",
  //               "Create a relaxing bedtime routine, such as reading, stretching, or meditating, to signal your body that it's time to wind down.",
  //               "Make your sleep environment conducive to rest: keep the room cool, dark, and quiet, and invest in a comfortable mattress and pillows.",
  //               "Limit screen time before bed, as the blue light emitted by phones, tablets, and computers can interfere with your body's production of melatonin, a hormone that regulates sleep.",
  //             ],
  //           },
  //         ],
  //       },
  //       {
  //         title: "Mental Health Care",
  //         content: [
  //           {
  //             subtitle: "Why It's Important",
  //             text: "Your mental health is just as important as your physical health. Regularly checking in on your mental and emotional well-being can help you manage stress, build resilience, and maintain a positive outlook on life.",
  //           },
  //           {
  //             subtitle: "How to Care for Your Mental Health",
  //             list: [
  //               "Practice mindfulness or meditation. Apps like Headspace and Calm offer guided sessions that can help reduce stress and anxiety.",
  //               "Stay connected with loved ones. Social support is essential for maintaining good mental health, especially during challenging times.",
  //               "Engage in hobbies that bring you joy, whether it's painting, gardening, playing music, or reading.",
  //               "Set boundaries to protect your mental health, whether at work or in personal relationships. Learn to say no to avoid overcommitting and burnout.",
  //               "Seek professional help if needed. Therapy or counseling can provide valuable tools and support for managing mental health challenges like anxiety, depression, or stress.",
  //             ],
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   Sustainability: {
  //     icon: <Leaf className="w-6 h-6" />,
  //     introduction:
  //       "Living a more sustainable lifestyle helps protect the planet, conserves natural resources, and reduces your carbon footprint. Here's a guide to making eco-friendly choices in your daily life.",
  //     topics: [
  //       {
  //         title: "Reduce Waste",
  //         content: [
  //           {
  //             subtitle: "Why It Matters",
  //             text: "Reducing waste helps conserve resources and reduce pollution, particularly in landfills and oceans.",
  //           },
  //           {
  //             subtitle: "How to Reduce Waste",
  //             list: [
  //               "Refuse: Avoid items you don't need, like plastic bags or unnecessary packaging.",
  //               "Reduce: Buy fewer, higher-quality items that last longer instead of cheap, disposable products.",
  //               "Reuse: Opt for reusable items (e.g., water bottles, shopping bags, containers) over single-use products.",
  //               "Recycle: Properly sort recyclable materials (e.g., paper, glass, plastics) according to your local recycling guidelines. Not everything is recyclable, so be aware of what's accepted in your area.",
  //               "Compost: Composting organic waste like food scraps and yard trimmings reduces methane emissions from landfills and creates nutrient-rich soil.",
  //             ],
  //           },
  //         ],
  //       },
  //       {
  //         title: "Conserve Water",
  //         content: [
  //           {
  //             subtitle: "Why It Matters",
  //             text: "Water is a precious resource, and conserving it helps protect the environment and ensure future generations have access to clean water.",
  //           },
  //           {
  //             subtitle: "How to Conserve Water",
  //             list: [
  //               "Fix leaks in faucets, toilets, and hoses, which can waste thousands of gallons of water per year.",
  //               "Install water-efficient appliances and fixtures, such as low-flow showerheads, faucets, and toilets.",
  //               "Turn off the tap while brushing your teeth or shaving, and only run dishwashers and washing machines with full loads.",
  //               "Collect rainwater for watering plants and gardens, or use drought-resistant plants that require less watering.",
  //             ],
  //           },
  //         ],
  //       },
  //       {
  //         title: "Energy Efficiency",
  //         content: [
  //           {
  //             subtitle: "Why It Matters",
  //             text: "Using energy efficiently reduces greenhouse gas emissions, conserves natural resources, and saves money on utility bills.",
  //           },
  //           {
  //             subtitle: "How to Save Energy",
  //             list: [
  //               "Switch to LED light bulbs, which use up to 75% less energy and last much longer than traditional incandescent bulbs.",
  //               "Unplug appliances and electronics when they're not in use to prevent 'phantom' energy use, which occurs even when devices are turned off.",
  //               "Use a programmable thermostat to reduce energy consumption by adjusting the temperature when you're asleep or away from home.",
  //               "Upgrade to energy-efficient appliances, such as refrigerators, washing machines, and water heaters, which use less energy and save money over time.",
  //               "Insulate your home to reduce the amount of energy needed for heating and cooling.",
  //             ],
  //           },
  //         ],
  //       },
  //       {
  //         title: "Sustainable Transportation",
  //         content: [
  //           {
  //             subtitle: "Why It Matters",
  //             text: "Transportation is one of the largest sources of greenhouse gas emissions. Choosing eco-friendly transportation options reduces your carbon footprint and helps combat climate change.",
  //           },
  //           {
  //             subtitle: "Sustainable Transportation Options",
  //             list: [
  //               "Walk or bike for short trips instead of driving. Not only is this better for the environment, but it's also great for your health.",
  //               "Use public transportation when possible. Buses and trains are more energy-efficient per passenger than individual cars.",
  //               "Carpool or use ride-sharing services to reduce the number of vehicles on the road.",
  //               "If you need to drive, consider an electric or hybrid vehicle, which produce fewer emissions than traditional gasoline-powered cars.",
  //               "Combine errands into one trip to reduce overall driving time and fuel consumption.",
  //             ],
  //           },
  //         ],
  //       },
  //       {
  //         title: "Support Sustainable Products",
  //         content: [
  //           {
  //             subtitle: "Why It Matters",
  //             text: "Supporting companies that prioritize sustainability helps drive demand for eco-friendly practices and products, encouraging more businesses to adopt sustainable methods.",
  //           },
  //           {
  //             subtitle: "How to Support Sustainable Products",
  //             list: [
  //               "Research companies before purchasing to understand their environmental practices and commitments.",
  //               "Look for eco-labels and certifications like Energy Star, USDA Organic, Fair Trade, or Forest Stewardship Council (FSC) when shopping.",
  //               "Choose products made from recycled or sustainable materials, such as bamboo, organic cotton, or recycled plastics.",
  //               "Support local businesses and farmers' markets to reduce transportation emissions and support your local economy.",
  //               "Invest in high-quality, durable products that will last longer, reducing the need for frequent replacements.",
  //             ],
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // });
  return <HomePage />;
}
