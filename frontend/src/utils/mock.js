// Mock data for AI Assistant
export const mockChatResponse = (userInput) => {
  const input = userInput.toLowerCase();
  
  if (input.includes('machine learning') || input.includes('ml')) {
    return 'Machine Learning is a subset of AI that enables systems to learn and improve from experience without being explicitly programmed. It uses algorithms to identify patterns in data and make predictions or decisions based on those patterns.';
  }
  
  if (input.includes('deep learning') || input.includes('neural network')) {
    return 'Deep Learning uses neural networks with multiple layers (hence "deep") to progressively extract higher-level features from raw input. It\'s particularly effective for image recognition, natural language processing, and complex pattern recognition tasks.';
  }
  
  if (input.includes('nlp') || input.includes('natural language')) {
    return 'Natural Language Processing (NLP) is a branch of AI that helps computers understand, interpret, and generate human language. It powers applications like chatbots, translation services, sentiment analysis, and voice assistants.';
  }
  
  if (input.includes('computer vision') || input.includes('image')) {
    return 'Computer Vision enables machines to derive meaningful information from digital images and videos. It\'s used in facial recognition, autonomous vehicles, medical imaging, quality control, and augmented reality applications.';
  }
  
  if (input.includes('generative') || input.includes('gpt') || input.includes('generate')) {
    return 'Generative AI creates new content - text, images, code, music, and more. Models like GPT (for text) and DALL-E (for images) can generate human-like outputs by learning patterns from vast amounts of training data.';
  }
  
  if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
    return 'Hello! I\'m here to help you learn about artificial intelligence. Feel free to ask me about any AI topic, technology, or application!';
  }
  
  if (input.includes('how') && input.includes('work')) {
    return 'AI systems work by processing large amounts of data, identifying patterns, and making predictions or decisions based on those patterns. They use mathematical models and algorithms that improve with experience and more data.';
  }
  
  if (input.includes('use case') || input.includes('application')) {
    return 'AI has countless applications across industries: healthcare diagnosis, financial trading, autonomous vehicles, personalized recommendations, fraud detection, virtual assistants, content creation, and much more. Each industry is finding unique ways to leverage AI capabilities.';
  }
  
  // Default response
  return 'That\'s an interesting question about AI! Artificial intelligence encompasses many technologies and applications. Could you be more specific about what aspect of AI you\'d like to know more about? For example: machine learning, natural language processing, computer vision, or specific use cases.';
};