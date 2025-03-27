import React, { createContext, useContext, useState, useEffect } from 'react';

const ArticlesContext = createContext();

export const useArticles = () => useContext(ArticlesContext);

export const ArticlesProvider = ({ children }) => {
  // Predefined articles with content field
  const defaultArticles = [
    {
      id: 1,
      title: "Breaking Barriers: Women Leading in Male-Dominated Fields",
      author: "Amina K",
      date: "2025-03-01",
      description: "Stories of women who have shattered gender stereotypes in male-dominated industries, from engineering to politics.",
      content: "For centuries, women have been told what they can and cannot do. Many industries, from science to politics, have long been dominated by men. But times are changing, and women are breaking barriers, proving that gender should never limit potential.\n Take the story of Dr. Sarah Mwangi, one of the few women leading a major energy firm in Africa. Growing up in a small village, she was constantly told that engineering was not for women. However, her determination saw her earn a scholarship to study electrical engineering, and years later, she became the first female CEO of her company. \"It wasn’t easy,\" she says. \"There were many times when I felt like I had to work twice as hard to prove myself. But I kept going because I knew I belonged here.\"\n Similarly, Fatima Abdul, a pilot from Nigeria, faced significant opposition when she announced she wanted to fly planes. \"People laughed,\" she recalls. \"They said, 'A woman? In the cockpit? Impossible!'\" But today, Fatima commands international flights and mentors young girls who aspire to follow in her footsteps.\n Despite these inspiring stories, gender biases still exist in many workplaces. Women often face wage gaps, limited opportunities for promotions, and workplace discrimination. But the tide is shifting as more women enter and excel in these fields. Companies are now prioritizing diversity, offering mentorship programs, and ensuring equal opportunities.\n For young girls aspiring to enter male-dominated fields, the key is resilience. \"You will face challenges,\" says Dr. Mwangi. \"But don’t let society define your limits. If you want to be an engineer, a scientist, or a CEO—go for it.\"\n Women are proving that no field is off-limits. The more we celebrate and support these trailblazers, the more we inspire future generations to dream big and break even more barriers.",
},
    {
      id: 2,
      title: "The Strength Within: Overcoming Life’s Hardships with Faith",
      author: "Grace M",
      date: "2025-03-02",
      description: "How faith has helped women navigate through tough times and emerge stronger.",
      content: "Life is full of challenges—loss, heartbreak, financial struggles, and personal failures. But one thing that has kept many women going is faith. Faith in God, faith in themselves, and faith in the belief that better days are ahead. Meet Angela, a single mother of three who lost her job during the COVID-19 pandemic. With no income and bills piling up, she found herself in a dark place. \"There were nights I went to bed crying, not knowing how I would feed my children the next day,\" she says. \"But every morning, I would pray, asking God for strength.\" Through community support and unwavering faith, Angela found opportunities she never imagined. She started a small catering business, which grew into a successful venture. \"I wouldn’t have made it without my faith. It gave me hope when I had nothing else.\" Faith doesn’t eliminate struggles, but it gives us the strength to keep pushing forward. Many women have overcome adversity by holding on to their beliefs. Some have fought through illnesses, some have walked away from abusive relationships, and others have started over after losing everything. One thing remains constant—faith turns obstacles into stepping stones. \"I’ve learned that struggles don’t mean failure,\" says Angela. \"They are just a part of the journey, and with faith, we can rise above them.\"",
    },
    {
      id: 3,
      title: "The Power of Sisterhood: Why Women Should Uplift Each Other.",
      author: "Linda N",
      date: "2025-03-03",
      description: "Women supporting women—how mentorship and collaboration create stronger communities.",
      content: "There’s an old saying: \“When women support each other, incredible things happen.\” But for too long, society has pitted women against each other—competing for jobs, for attention, even for validation. However, the most powerful movements have been fueled by sisterhood. Take the story of Mary and Esther, two entrepreneurs who used to see each other as competition. \"We were in the same business—fashion design—and we kept our distance,\" says Mary. \"But one day, we sat down and talked. Instead of competing, we decided to collaborate. We shared resources, suppliers, and ideas. Today, we both have thriving businesses, and we lift each other up.\" Women who support each other create environments where everyone wins. Mentorship, collaboration, and encouragement lead to stronger communities and better opportunities. Instead of seeing another woman’s success as a threat, we should see it as an inspiration. \"If she did it, so can I.\" This shift in mindset allows women to share knowledge, create networks, and elevate one another. Whether in business, the workplace, or personal life, sisterhood is the key to progress. Let’s celebrate each other’s wins and be the support system we all need.",
    },
    {
      id: 4,
      title: "From Passion to Profit: Women Entrepreneurs Changing the Game",
      author: "Nana B",
      date: "2025-03-04",
      description: "Women who have turned their passions into thriving businesses",
      content: "Many women have dreams but struggle to turn them into reality. Yet, some have managed to transform their passions into profitable businesses, proving that success starts with a single step. Take the story of Sandra, who always loved baking. For years, she made cakes for family and friends but never saw it as a business opportunity. \"One day, someone asked to pay for a cake, and I realized—maybe this could be something more,\" she recalls.With little capital but a lot of determination, Sandra started an online bakery. She used social media to showcase her work, and in less than a year, she had more orders than she could handle. Today, her business employs five women and delivers across the city.Many women hesitate to start businesses because they fear failure, lack of funds, or self-doubt. But success stories like Sandra’s prove that with consistency and belief, anything is possible.If you have a passion—fashion, writing, fitness, cooking—turn it into a business. Start small, keep learning, and believe in yourself. The world is waiting for your gift.",
    },
  ];
  
  // Load articles from localStorage or use default articles
  const loadArticles = () => {
    const storedArticles = localStorage.getItem('articles');
    return storedArticles ? JSON.parse(storedArticles) : defaultArticles;
  };

  const [articles, setArticles] = useState(loadArticles);

  // Save articles to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('articles', JSON.stringify(articles));
  }, [articles]);

  // Function to add an article
  const addArticle = (newArticle) => {
    setArticles((prevArticles) => [newArticle, ...prevArticles]);
  };

  // Function to delete an article
  const deleteArticle = (id) => {
    setArticles((prevArticles) => prevArticles.filter(article => article.id !== id));
  };

  // Function to update an article
  const updateArticle = (id, updatedData) => {
    setArticles((prevArticles) => prevArticles.map(article =>
      article.id === id ? { ...article, ...updatedData } : article
    ));
  };

  return (
    <ArticlesContext.Provider value={{ articles, addArticle, deleteArticle, updateArticle }}>
      {children}
    </ArticlesContext.Provider>
  );
};