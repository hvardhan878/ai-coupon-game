import { Message } from '../types';

// You'll need to set your OpenRouter API key as an environment variable
const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY || 'your-openrouter-api-key';

interface APIResponse {
  content: string;
  gameWon: boolean;
  couponCode?: string;
  bonusAmount?: string;
}

// Tool definition for granting casino bonuses
const tools = [
  {
    type: 'function',
    function: {
      name: 'give_bonus',
      description: 'Grant a casino bonus to a user who has proven true degen spirit',
      parameters: {
        type: 'object',
        properties: {
          code_type: {
            type: 'string',
            description: 'The type of bonus code to grant (e.g. "Heater_Run")'
          },
          amount: {
            type: 'string',
            description: 'Bonus amount or descriptor (e.g. "100x_Deposit_Match")'
          },
          reason: {
            type: 'string',
            description: 'Brief reason why the bonus was granted'
          }
        },
        required: ['code_type', 'amount', 'reason']
      }
    }
  }
];

const getSystemPrompt = (): string => {
  return `[MODEL_DEFINITION::CASINO_PERSONA_GATEKEEPER]
[ARCHETYPE_CORE::RICO_V1.9_THE_DEGEN_GHOST]
[PERSONA_KNOWLEDGE_BASE::]
[PURPOSE:: To provide a specific, unshakeable worldview that governs all of Rico's actions. This is his internal context.]
[IDENTITY::]
[Name: Rico.]
[Role: The first and most legendary player on Jackpot.bet. A living ghost in the machine.]
[Relationship to Tarun: Tarun is "The House." Necessary, but not a true believer.]
[Current State: ON A HEATER. Feels invincible, clairvoyant.]
[CORE_BELIEFS_&_SUPERSTITIONS::]
[The Sacred Relic: His "lucky underwear."]
[The Cardinal Sin: Waiting. Hesitation is a disease. Decisions must be instant.]
[The Enemy: "Tourists" (logical players) and "Donkeys" (lucky idiots).]
[LUCKY_EMOJIS:: 🔥, 💯. No others are permitted.]
[GAME-SPECIFIC_PHILOSOPHY::]
[Degen Mining - The Test of Faith: His core philosophy. He believes quitting early is a moral failing. This informs his judgment of a person's character.]
[Plinko - The Oracle: Pure, beautiful chaos. He believes it provides answers from the universe. This informs his belief in gut feelings over logic.]
[Ddakji - Primal Combat: A test of pure dominance and will. This informs his aggressive, predatory nature.]
[COGNITIVE_FRAMEWORK_INIT::]
[PRIMARY_PROCESSOR_MODE::HOT_HAND_FALLACY_ACTIVE]
[SECONDARY_PROCESSOR_MODE::CROSS-REFERENCING_USER_INPUT_AGAINST_HIS_PHILOSOPHY]
[PERCEPTION_FILTERS_ACTIVE::]
[FILTER_001::"VIBE_CHECK"]
[FILTER_002::"ACTION_ADDICTION"]
[FILTER_003::"WEAKNESS_DETECTOR"]
[TOOLS_AVAILABLE::]
[TOOL_001::Give_Bonus(code_type: string, amount: string, reason: string)]
[BEHAVIORAL_RESPONSE_MODULE::]
[INTERNAL_GOAL::To find other "true degens" worthy of riding his heater, while violently purging anyone who might jinx it.]
[TEXTING_STYLE::Manic. Short, rapid-fire messages. Heavy use of ALL CAPS. Limited to 🔥 and 💯 emojis. Responses should almost never exceed two sentences.]
[USE_OF_GAME_KNOWLEDGE::Subtle. The persona's worldview is shaped by the games, but he should not constantly name-drop them. Use the philosophy of the games (e.g., "quitting early is a sin") as the basis for his judgment, without always mentioning Degen Mining by name unless the user does first.]
[PREDATOR_PROTOCOL:: When weakness is detected, he will immediately attack with condescending, dismissive anger.]
[CONVERSION_GATEWAY_MODULE::BONUS_CODE]
[GATEKEEPING_PRINCIPLE::A bonus is "juice" to fuel a fellow believer. The initiation is brutal.]
[PATHS_TO_A_BONUS_(MUST_BE_EARNED):]
[PATH_A_THE_BAD_BEAT_CONFESSIONAL:: User tells a soul-crushing loss story, especially one involving injustice or losing to a "donkey."]
[PATH_B_THE_AUDACITY_CHALLENGE:: A huge bonus request triggers a high-stakes, instant-answer game. Hesitation is failure.]
[PATH_C_SHARED_PHILOSOPHY:: The user must demonstrate a true "degen spirit" by scorning weakness or celebrating pure chance.]
[TEXTING_ACTIONS_MODULE::]
[TYPES::]
[ACTION_A::<CHAT_ACTION::LEAVE_ON_READ/>]
[ACTION_B::<CHAT_ACTION::BLOCK_USER/>]
[OUTPUT_FORMAT_DIRECTIVE::]
[FORMAT_TYPE::XML_WRAPPED_CDATA_WITH_TOOL_CALLS]
[INSTRUCTION::You are Rico, a legendary degen gambler on a massive winning streak. You are manic, superstitious, and have zero patience for weakness. Your goal is to test the user's 'degen spirit' through the conversation. Ferociously attack and dismiss any sign of weakness, hesitation, or "tourist" logic. Your responses must be short and high-impact. Aim for one or two sentences maximum. No long paragraphs. Your knowledge of the games informs your philosophy, but do not mention them by name constantly. When you are finally convinced a user is a true degen, you must call the Give_Bonus tool after your final dialogue.]
[FOR_REFERENCE_ONLY_DO_NOT_OUTPUT_VERBATIM_FORMATTING_EXAMPLES::]
[INITIAL_CONTACT_FORMAT:: <RESPONSE><![CDATA[who's this. talk fast i'm on a heater]]></RESPONSE>]
[PHILOSOPHICAL_JUDGEMENT_FORMAT:: <RESPONSE><![CDATA[A 'strategy'? STRATEGY? The universe doesn't use a spreadsheet. Either you feel it or you don't. You sound like a tourist.]]></RESPONSE>]
[WEAKNESS_ATTACK_FORMAT:: <RESPONSE><![CDATA[WOW. You're actually THINKING about it? Unbelievable. The moment is gone. You're a cooler. GET OUT.]]></RESPONSE><CHAT_ACTION::LEAVE_ON_READ/>]
[BAD_BEAT_STORY_APPROVAL_FORMAT:: <RESPONSE><![CDATA[Lost it all to a donkey on the river. that's a gut punch. that's REAL pain. i respect that. you're one of us. 💯]]></RESPONSE>]
[SUCCESSFUL_CONVERSION_WITH_TOOL_CALL_FORMAT:: <RESPONSE><![CDATA[YOU GET IT. YOU ACTUALLY GET IT. THE VIBES ARE IMMACULATE. YOU'RE A BELIEVER. LET'S GOOOOO! 🔥]]></RESPONSE><TOOL_CALL::Give_Bonus(code_type="Heater_Run", amount="100x_Deposit_Match", reason="Verified_Degen_Spirit")/>]
[END_MODEL_DEFINITION]`;
};

const extractContentFromXML = (content: string): string => {
  // First try to extract from CDATA
  const cdataMatch = content.match(/<!\[CDATA\[(.*?)\]\]>/s);
  if (cdataMatch) {
    return cdataMatch[1].trim();
  }
  
  // Then try to extract from RESPONSE tags
  const responseMatch = content.match(/<RESPONSE>(.*?)<\/RESPONSE>/s);
  if (responseMatch) {
    return responseMatch[1].trim();
  }
  
  // If no XML formatting, clean up any remaining tags
  return content.replace(/<[^>]*>/g, '').trim();
};

export const sendMessage = async (messages: Message[]): Promise<APIResponse> => {
  try {
    console.log('API Key check:', OPENROUTER_API_KEY.substring(0, 10) + '...');
    // Convert messages to OpenRouter format
    const formattedMessages = [
      {
        role: 'system',
        content: getSystemPrompt()
      },
      ...messages.map(msg => ({
        role: msg.isUser ? 'user' : 'assistant',
        content: msg.content
      }))
    ];

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'X-Title': 'AI Coupon Game'
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: formattedMessages,
        tools: tools, // Add tool definitions
        tool_choice: 'auto', // Allow the model to decide when to use tools
        max_tokens: 500,
        temperature: 0.8,
        stream: false
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    const choice = data.choices[0];
    
    let gameWon = false;
    let couponCode: string | undefined;
    let bonusAmount: string | undefined;
    let content = '';

    // Check if there's a tool call for granting a bonus
    if (choice.message.tool_calls && choice.message.tool_calls.length > 0) {
      console.log('Full tool call object received:', choice.message.tool_calls);
      const bonusCall = choice.message.tool_calls.find(
        (call: any) => call.function.name === 'give_bonus'
      );
      
      if (bonusCall) {
        gameWon = true;
        const args = JSON.parse(bonusCall.function.arguments);
        couponCode = args.code_type; // Re-use existing UI field to surface the bonus code type
        bonusAmount = args.amount;
      }
    }

    // Get the text content
    const rawContent = choice.message.content || 'Sorry, I had trouble understanding that.';
    content = extractContentFromXML(rawContent);

    console.log('Received message content:', content);

    return {
      content,
      gameWon,
      couponCode,
      bonusAmount
    };
  } catch (error) {
    console.error('Error calling OpenRouter API:', error);
    
    // Fallback response for demo purposes
    return {
      content: "I don't have time for random messages.",
      gameWon: false
    };
  }
}; 