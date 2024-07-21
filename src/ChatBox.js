import React, { useState } from 'react';
import './App.css';

const textContents1 = [
    "def merge(left\, right)\: \n if not len(left) or not len(right): \n return left or right \n result = [\] \n i, j = 0, 0 \n while (len(result) < len(left) + len(right)): \n if left[i] < right[j]: \n result.append(left[i]) \n i+= 1 \n else: \n result.append(right[j]) \n j+= 1 \n if i == len(left) or j == len(right): \n result.extend(left[i:] or right[j:]) \n break \n return result \n def mergesort(list): \n if len(list) < 2: \n return list \n middle = len(list)/2 \n left = mergesort(list[:middle]) \n right = mergesort(list[middle:]) \n return merge(left, right)",
 ];

const textContents2 = [
     "def bubbleSort(arr): \n n = len(arr) \n # 外层循环控制排序的总轮数 \n for i in range(n): \n # 假设每轮排序后最大的元素已经冒泡到它应该在的位置 \n already_sorted = True \n # 内层循环进行实际的元素比较和交换 \n for j in range(1, n - i): # 每轮后一个元素已经到位，所以减1 \n try: \n if arr[j - 1] > arr[j]: \n # 如果前一个元素大于后一个元素，交换它们 \n arr[j - 1], arr[j] = arr[j], arr[j - 1] \n already_sorted = False \n except TypeError as e: \n # 如果发生类型错误，比如尝试比较不同类型的元素  \n print(f\"TypeError: {e}\") \n break # 退出内层循环 \n # 如果没有发生任何交换，说明数组已经排序完成 \n if already_sorted: \n break \n return arr \n # 测试冒泡排序算法 \n test_array = [64, 34, 25, 12, 22, 11, 90] \n sorted_array = bubbleSort(test_array) \n print(\"Sorted array:\", sorted_array)",
];

const textContents3 = [
   "import re \n from collections import Counter \n def read_file(file_path): \n \"\"\"读取文件并返回内容\"\"\" \n try: \n with open(file_path, \'r\', encoding=\'utf-8\') as file: \n return file.read() \n except FileNotFoundError: \n print(\"Error: File not found.\") \n return None \n except Exception as e: \n print(f\"An error occurred: {e}\") \n return None \n def clean_and_split_text(text): \n \"\"\"清洗文本，移除非字母字符，并分割成单词列表\"\"\" \n text = re.sub(r\'\[\^a-zA-Z\\s\]\', \'\', text) # 移除非字母和非空格字符 \n words = text.lower().split() # 转换为小写并分割 \n return words \n def count_words(words): \n \"\"\"统计单词出现次数\"\"\" \n return Counter(words) \n def analyze_text(file_path): \n \"\"\"分析文本文件中的单词频率\"\"\" \n text = read_file(file_path) \n if text is not None: \n words = clean_and_split_text(text) \n word_count = count_words(words) \n for word, count in word_count.items(): \n print(f\"{word}: count}\") \n if __name__ == \"__main__\": \n file_path = input(\"Enter the path to the text file: \") \n  analyze_text(file_path)",
];

const textContents4 = [
   "def simple_calculator(): \n operations = [\'+\', \'-\', \'*\', \'/\'] \n print(\"简单计算器程序，请输入您的运算：\") \n while True: \n try: \n # 使用for循环遍历operations列表 \n for operation in operations: \n print(operation) \n # 获取用户输入 \n num1 = float(input(\"输入第一个数字：\")) \n num2 = float(input(\"输入第二个数字：\")) \n operation = input(\"选择运算符（+, -, *, /）：\") \n # 检查运算符是否有效 \n if operation not in operations: \n print(\"无效的运算符，请重新运行程序。\") \n break \n # 执行运算 \n if operation == \'+\': \n result = num1 + num2 \n elif operation == \'-\': \n result = num1 - num2 \n elif operation == \'*\': \n result = num1 * num2 \n elif operation == \'\/\': \n # 检查除数是否为零 \n if num2 == 0: \n  print(\"除数不能为零。\") \n continue \n result = num1 / num2 \n print(f\"结果是：{result}\") \n except ValueError: \n print(\"无效的数字输入，请确保您输入的是数字。\") \n continue \n # 询问用户是否想继续 \n another_calculation = input(\"想要继续计算吗？(yes/no)：\") \n if another_calculation.lower() != \'yes\': \n break \n simple_calculator() ",
   ];

const textContents5 = [
    "def vocabulary_learner(): \n vocabulary = { \n \'apple\': \'苹果\', \n \'banana\': \'香蕉\', \n \'cherry\': \'樱桃\', \n # 可以添加更多词汇 } \n learned = [] # 记录已学会的词汇 \n print(\"欢迎来到词汇学习器！请选择您要学习的词汇：\") \n while True: \n for word, translation in vocabulary.items(): \n print(f\"{word}: {translation}\") \n selected_word = input(\"输入您想学习的词汇（输入\'exit\'退出）：\") \n if selected_word.lower() == \'exit\': \n print(\"感谢使用词汇学习器。\") \n break # 用户选择退出 \n try: \n # 确保用户输入的是列表中的词汇 \n if selected_word not in vocabulary: \n raise ValueError(\"这不是列表中的词汇，请重新输入。\") \n # 测试用户是否知道词汇的意思 \n print(f\"\n\'{selected_word}\'的意思是：\") \n guess = input(\"请输入您的记忆：\") \n if guess.lower() == vocabulary[selected_word].lower(): \n print(\"回答正确！\") \n if selected_word not in learned: \n learned.append(selected_word) \n print(f\"\'{selected_word}\'已添加到已学会的词汇列表。\") \n else: \n print(\"回答错误，请再试一次。\") \n except ValueError as ve: \n print(ve) \n continue # 输入错误，继续循环 \n # 显示用户已学会的词汇 \n print(\"\n您已学会的词汇有：\") \n for word in learned: \n print(f\"{word}: {vocabulary[word]}\") \n vocabulary_learner() \n",
   ];

const textContents6 = [
     "def main(): \n manager = RecipeManager() \n while True: \n print(\"\n简易食谱管理器\") \n print(\"1. 添加食谱\") \n print(\"2. 列出食谱\") \n print(\"3. 显示食谱详情\") \n print(\"4. 删除食谱\") \n print(\"5. 退出\") \n try: \n choice = int(input(\"请选择一个操作：\")) \n if choice == 1: \n name = input(\"输入食谱名称：\") \n ingredients = input(\"输入食材列表，用逗号分隔：\").split(\',\') \n recipe = Recipe(name, ingredients) \n manager.add_recipe(recipe) \n elif choice == 2: \n manager.list_recipes() \n elif choice == 3: \n name = input(\"输入要显示的食谱名称：\") \n manager.show_recipe(name) \n elif choice == 4: \n name = input(\"输入要删除的食谱名称：\") \n manager.remove_recipe(name) \n elif choice == 5: \n break \n else: \n print(\"无效选项，请重新选择。\") \n except ValueError: \n print(\"请输入有效的数字。\") \n if __name__ == \"__main__\": \n main()\n",
];


const ChatBox = () => {
const [messages, setMessages] = useState([]);
const [input, setInput] = useState('');

const handleSendMessage = async () => {
    if (input.trim()) {
        const userMessage = { sender: 'user', text: input };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInput('');

try {
    const response = await fetch('http://127.0.0.1:5500/chat', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
},
body: JSON.stringify({ message: input }),
});

if (!response.ok) {
throw new Error('Network response was not ok');
}

const data = await response.json();
if (data.error) {
throw new Error(data.error);
}

const botMessage = { sender: 'bot', text: data.reply };
setMessages((prevMessages) => [...prevMessages, botMessage]);
} catch (error) {
console.error('Error sending message:', error);
const errorMessage = { sender: 'bot', text: 'Error: ' + error.message };
setMessages((prevMessages) => [...prevMessages, errorMessage]);
}
}
};
const handleExportMessage = (text) => {
    const fileName = 'action';
    const downloadpath = 'C:\\Users\\cmaca\\kkkk\\Assets\\LineWaves\\Scripts\\';
    //const fileName = prompt('Enter the file name', 'action');
    const element = document.createElement('a');
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();

    document.body.removeChild(element);

};


return (

    <div className="chat-box">
        <div className="demo">
            <p1>Demo示例如下图：</p1>
        </div>

        <div className="text-left">
            {textContents1.map((content, index) => (
                <div key={index}>
                    {content}
                </div>
            ))
            }
        </div>
        
        <div className="text-right">
            {textContents3.map((content, index) => (
                <div key={index}>
                    {content}
                </div>
            ))
            }
        </div>

        <div className="text-middle">
            {textContents2.map((content, index) => (
                <div key={index}>
                    {content}
                </div>
            ))
            }
        </div>

        <div className="text-left">
            {textContents4.map((content, index) => (
                <div key={index}>
                    {content}
                </div>
            ))
            }
        </div>
        
        <div className="text-right">
            {textContents6.map((content, index) => (
                <div key={index}>
                    {content}
                </div>
            ))
            }
        </div>

        <div className="text-middle">
            {textContents5.map((content, index) => (
                <div key={index}>
                    {content}
                </div>
            ))
            }
        </div>
        
        <div className="demo">
            <p1>和ChatBot对话可以了解代码逻辑~</p1>
        </div>

        <div className="messages">
            {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
                {/* print(message) */}
                {msg.sender === 'bot' && (
                <button onClick={() => handleExportMessage(msg.text)}>Export</button>
                )}

            </div>
            ))
            }
        </div>

        <div className="input-box">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="直接输入代码"
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    </div>
);
};

export default ChatBox;