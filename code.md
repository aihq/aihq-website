---
layout: page
title: Code
permalink: /code/
hero-title: Learn to Code
hero-subtitle: Opening doors to AI
websites:
    - name: ai4all
      title: AI4ALL
      courses:
      - name: What is AI?
        link: https://ai4all.docebosaas.com/learn/course/19/unit-plans-and-facilitation-guides-10-hours;lp=6
        description: Discover the definition of AI and learn about the abilities and limitations of AI. They also explore the societal impacts of AI as well as example of AI in different fields. Finally, learners do a mini research project on AI in their own lives.
        difficulty: easy
      - name: What is Data?
        link: https://ai4all.docebosaas.com/learn/course/11/unit-2-what-is-data;lp=2
        description: Explore data in AI including where it comes from and how it affects outcomes.
        difficulty: easy

    - name: coursera
      title: Coursera
      courses:
      - name: Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning
        link: https://www.coursera.org/learn/introduction-tensorflow
        description: If you are a software developer who wants to build scalable AI-powered algorithms, you need to understand how to use the tools to build them. This course is part of the upcoming Machine Learning in Tensorflow Specialization and will teach you best practices for using TensorFlow, a popular open-source framework for machine learning.
        difficulty: intermediate 
      - name: Convolutional Neural Networks in TensorFlow
        link: https://www.coursera.org/learn/convolutional-neural-networks-tensorflow/
        description: If you are a software developer who wants to build scalable AI-powered algorithms, you need to understand how to use the tools to build them. This course is part of the upcoming Machine Learning in Tensorflow Specialization and will teach you best practices for using TensorFlow, a popular open-source framework for machine learning.
        difficulty: intermediate

    - name: codecademy
      title: Codecademy
      courses:
      - name: Get started with Machine Learning
        link: https://www.codecademy.com/learn/paths/machine-learning
        description: Did you know more data has been created in the past two years than in the rest of human history? That’s why machine learning models that find patterns in data and make decisions are so important. Learn how to build them with Python.
        difficulty: intermediate
      - name: Learn the Watson API
        link: https://www.codecademy.com/learn/ibm-watson
        description: IBM Watson is one of the most powerful AI systems in the world. Learn how to plug your code into the Watson API to use its amazing functionality. In this course, you’ll use Python to interact with the Twitter API and IBM’s Personality Insights API in order to analyze traits shared between two Twitter users.
        difficulty: intermediate

    - name: edx
      title: EdX
      courses:
      - name: Introduction to Artificial Intelligence (AI)
        link: https://www.edx.org/course/introduction-to-artificial-intelligence-ai-2
        description: A high-level overview of AI to learn how Machine Learning provides the foundation for AI, and how you can leverage cognitive services in your apps.
        difficulty: easy
      - name: Machine Learning
        link: https://www.edx.org/course/machine-learning
        description: Master the essentials of machine learning and algorithms to help improve learning from data without human intervention.
        difficulty: difficult
    
    - name: cognitiveclass
      title: Cognitive Class
      courses:
      - name: Build Your Own Chatbot
        link: https://cognitiveclass.ai/courses/how-to-build-a-chatbot
        description: Learn how to build a chatbot without having to write any code by leveraging Watson Assistant (formerly Watson Conversation). Then deploy your chatbot to a real web site in less than five minutes.
        difficulty: easy
      - name: Machine Learning with Python
        link: https://cognitiveclass.ai/courses/machine-learning-with-python
        description: Machine Learning can be an incredibly beneficial tool to uncover hidden insights and predict future trends. This free Machine Learning with Python course will give you all the tools you need to get started with supervised and unsupervised learning.
        difficulty: intermediate
---

<div class="jumbotron jumbotron-fluid">
    <div class="container">
        <div class="row">
            {% for website in page.websites %}
            {% if forloop.index == 4 %}
            </div> <!-- close previous row div tag -->
            <div class="row"> <!-- open new row div tag -->
            <div class="col-sm-2"></div>
            {% endif %}
            <div class="col-sm-4">
                <div class="fancy-card-container">
                    <div class="fancy-card" data-toggle="modal" data-target="#{{ website.name }}-modal">
                        <div class="fancy-card-overlay"></div>
                        <img id="card-image-{{ website.name }}" src="{{ site.baseurl }}/assets/img/{{ website.name }}-logo.png">
                    </div>
                </div>
            </div>
            {% if forloop.index == 5 %}
            <div class="col-sm-2"></div>
            {% endif %}
            {% endfor %}
        </div>
    </div>
</div>

{% for website in page.websites %}
<div class="modal fade" id="{{ website.name }}-modal" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{ website.title }}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h5>Suggested Courses</h5>
        {% for course in website.courses %}
            <h6><b><a href="{{ course.link }}" target="_blank">{{ course.name }}</a></b></h6>
            <p>{{ course.description }}</p>
            <div class="course-difficulty">
                <img src="{{ site.baseurl }}/assets/img/{{ course.difficulty }}-bars.png">
                <p>{{ course.difficulty | capitalize }}</p>
            </div>
            <hr>
        {% endfor %}
      </div>
    </div>
  </div>
</div>
{% endfor %}
