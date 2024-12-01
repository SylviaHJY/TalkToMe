// 用户数据和场景定义
// 场景数据
const scenarios = [
  {
      scenario: "Loss of a loved one",
      description: "Imagine you're sitting in a quiet room, surrounded by the familiar belongings of someone you loved deeply, but now they feel distant and empty. Just yesterday, they were with you, laughing and sharing stories, but now they're gone, leaving behind an unbearable silence. Every small object—a book, a coffee cup—reminds you of them, stirring waves of grief that come and go, sometimes soft, sometimes overwhelming. You move through daily life in a haze, trying to manage the weight of loss while the world around you keeps spinning, even though yours feels like it has come to a halt.",
      responses: [
          "I acknowledge that you're going through a challenging situation. If there are any tasks you need help with, you can let me know. Please provide any specific details if assistance is required, and I will see what can be done. Let me know if you have any further updates or requests.",
          "I'm sorry you're going through this. Losing someone close can be incredibly difficult. Everyone processes grief in their own way and at their own pace, so it's important to give yourself the space and time you need. If talking about it helps or if there are specific things you feel might support you right now, I'm here for you.",
          "I'm really sorry for your loss. I can't imagine how difficult this must be for you right now. How are you holding up? If there's anything I can do to support you—whether it's just listening, helping with something practical, or giving you space—please don't hesitate to let me know. You don't have to go through this alone, and I'm here for whatever you need."
      ]
  },
  {
      scenario: "Breakup",
      description: "Breaking up with my girlfriend of three years has left me feeling utterly devastated. She wasn't just a part of my life; she was woven into every plan and dream I had for the future. Over time, I came to see her as my partner in all things, and together, we shared countless hopes and aspirations. Letting go now feels like tearing apart a piece of my identity, and I'm struggling to imagine moving forward without her by my side. It's painful to think of a future that no longer includes her, and the weight of those broken dreams feels almost too much to bear.",
      responses: [
          "Breakups, especially after a long relationship, can hit hard because they shift so much of what you've envisioned for the future. It's natural to feel disoriented, as a breakup changes the paths we expected to take. However, this is also an opportunity for a recalibration—a chance to understand what you value most in a relationship and in life.",
          "I'm sorry to hear that. Breakups can be challenging, especially after a long-term relationship where a shared future seemed likely. Adjusting to this change takes time and can bring up a range of emotions. Many people find that focusing on routines, personal goals, and self-care helps them gradually move forward and regain perspective. Take things one day at a time, giving yourself the space to adapt.",
          "I'm truly sorry you're going through this. Losing someone you've loved and imagined a future with is one of the hardest experiences to endure. When you've shared so many memories, dreams, and hopes, it feels like part of you is left behind, creating a deep emptiness. It's okay to feel heartbroken, to miss her, and to grieve what you thought the future would hold together. Right now, it might feel impossible to picture a future without her. The pain of losing someone you love is like no other, and it's okay to feel lost and overwhelmed. In time, these feelings will soften, and you'll carry forward the best memories while slowly finding yourself again. Let yourself feel what you need to, and know that this sadness is a testament to the love and dreams you shared. You're not alone, and it's okay to lean on others as you navigate through this."
      ]
  },
  {
      scenario: "Conflict",
      description: "I live with my college roommate and we've been sharing an apartment for a few months now. I'm someone who really values cleanliness and organization—seeing a spotless room helps me feel relaxed and focused. Every day, I make it a point to keep our shared spaces, like the kitchen and living room, tidy because I just feel better when things are clean. But lately, I've started feeling frustrated because my roommate doesn't seem to share the same priority for cleanliness. He'll leave dishes in the sink or clothes scattered around the living room, which, for him, is just normal and doesn't bother him much.",
      responses: [
          "It sounds like you're encountering a classic difference in living habits that can be common with roommates. You have a strong preference for cleanliness and organization, which makes you feel at ease, while your roommate seems to have a more relaxed approach. Recognizing this difference might be helpful to find ways to manage it practically, like discussing a shared cleaning schedule or setting specific expectations for common areas.",
          "Your focus on keeping shared spaces tidy is something that brings you a sense of calm and focus, and it's understandable to feel frustrated when that isn't matched by your roommate. Since you've already put in a lot of effort to keep things organized, it may be beneficial to have a straightforward conversation with him about expectations for the shared spaces. Finding a middle ground could help both of you feel comfortable in the apartment without putting undue pressure on either person.",
          "It's clear that keeping a clean and organized space is really important to you, both for your comfort and your focus, and it's perfectly reasonable to feel frustrated when that balance isn't shared. Living with a roommate who has a different approach to cleanliness can be tricky, especially when you've been working hard to keep things orderly. Maybe finding a gentle way to express why tidiness helps you feel more at ease could help open up a conversation, so he might understand your perspective better. Together, you could explore ways to maintain a level of cleanliness that respects both your needs."
      ]
  },
  {
      scenario: "Loneliness and Social Isolation",
      description: "I've been feeling really lonely lately. I don't have anyone to talk to, and it feels like I'm all alone.",
      responses: [
          "You might consider participating in local community events, joining interest-based clubs, or using online platforms designed for social networking. Engaging in these activities can help you meet new people and expand your social circle.",
          "I'm sorry to hear that you're feeling this way. It might be helpful to reach out to friends or family members, or perhaps explore new hobbies and activities that interest you. Connecting with others who share similar interests could alleviate some of the loneliness you're experiencing.",
          "I'm really sorry to hear that you're feeling so alone. That must be really tough. Please remember that you're not alone, and I'm here to listen if you'd like to talk more about how you're feeling."
      ]
  },
  {
      scenario: "Workplace Stress and Burnout",
      description: "The weight of my job has left me feeling completely drained. What used to be challenging and exciting now feels overwhelming and exhausting. The long hours, constant pressure, and unending responsibilities have taken a toll on my energy and motivation. I barely recognize myself outside of work anymore; it feels like my job has consumed my entire life. I can't seem to find the time or energy to unwind, and each day feels like a repeat of the last, without any end in sight. The idea of continuing at this pace seems impossible, but stepping back also feels out of reach.",
      responses: [
          "Workplace burnout can be a natural response to prolonged stress and high demands. It often emerges when we feel stretched too thin, especially in roles that require constant focus and responsibility. This is a chance to assess what aspects of your work-life balance may need attention. Identifying areas for change, such as setting boundaries or prioritizing self-care, can lead to a healthier relationship with work over time.",
          "I'm sorry to hear you're feeling this way. Workplace stress and burnout are common, especially when demands and responsibilities feel unrelenting. Taking time to focus on routines, setting small boundaries, and prioritizing well-being outside of work can sometimes help reduce the stress over time. It's a process, but by making small adjustments, you may gradually regain a sense of balance and purpose.",
          "I'm truly sorry you're going through this. Feeling like your job has overtaken your life can be incredibly hard. The exhaustion and lack of motivation you're experiencing aren't uncommon in times of extreme stress, but that doesn't make it any easier to bear. It's okay to feel as if you're losing yourself and struggling to keep up—it's a sign of how much you've given. Right now, it may feel impossible to find a way forward, but taking small steps to prioritize yourself, even in small ways, can be powerful. Burnout can be isolating, but know you're not alone, and it's okay to seek support from those around you. In time, you'll start to feel like yourself again and reconnect with the things that bring you peace and fulfillment outside of work. Be kind to yourself; you've done so much already."
      ]
  }
];

let currentScenarioIndex = 0;
let userChoices = [];
let username = "";

// 启动聊天
function startChat() {
    username = document.getElementById("username").value.trim();
    if (!username) {
        alert("Please enter a valid test name.");
        return;
    }
    document.getElementById("username-input").style.display = "none"; // 隐藏登录框
    document.getElementById("chat-box").style.display = "flex"; // 显示聊天框
    document.getElementById("message-box").style.display = "block"; // 显示消息框
    document.querySelector("p").textContent = 
        "Now interacting with the chatbot. Please note responses are algorithmic rather than genuine empathy. What's the best response would you like to see from the AI? Imagine this scenario";
    initializeChat();
}

// 初始化聊天界面
function initializeChat() {
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML = "";

    const scenario = scenarios[currentScenarioIndex];

    // 情景描述框 (右侧)
    const scenarioBox = document.createElement("div");
    scenarioBox.className = "message-box message-right";
    scenarioBox.textContent = `Scenario ${currentScenarioIndex + 1}: ${scenario.description}`;
    chatBox.appendChild(scenarioBox);

    // 回答选项 (左侧)
    const responseContainer = document.createElement("div");
    responseContainer.className = "responses-container";

    scenario.responses.forEach((response, index) => {
        const responseBox = document.createElement("div");
        responseBox.className = "response-box message-left";
        responseBox.textContent = response;
        responseBox.onclick = () => handleResponseSelection(index);
        responseContainer.appendChild(responseBox);
    });

    chatBox.appendChild(responseContainer);
}

// 处理用户选择
function handleResponseSelection(index) {
    const scenario = scenarios[currentScenarioIndex];
    const choice = {
        username: username,
        scenario: scenario.scenario,
        description: scenario.description,
        selectedResponse: scenario.responses[index],
        type: ["Non-Emotional", "Neutral", "Empathetic"][index]
    };
    userChoices.push(choice);

    currentScenarioIndex++;

    if (currentScenarioIndex < scenarios.length) {
        initializeChat();
    } else {
        endChat();
    }
}

// 结束聊天
function endChat() {
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML = "<h2 style='text-align: center;'>Thank you for completing the survey!</h2>";
    downloadResults();
}

// 下载结果为 CSV
function downloadResults() {
    let csvContent = "data:text/csv;charset=utf-8,Username,Scenario,Description,Selected Response,Type\n";

    userChoices.forEach(choice => {
        csvContent += `"${choice.username}","${choice.scenario}","${choice.description}","${choice.selectedResponse}","${choice.type}"\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${username}_survey_results.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
