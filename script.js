document.addEventListener('DOMContentLoaded', function() {
    const nextButton = document.getElementById('next-btn');
    const submitButton = document.getElementById('submit-btn');
    const questionContainerElement = document.getElementById('question-container');
    const questionElement = document.getElementById('question');
    const answerButtonsElement = document.getElementById('answer-buttons');
    const timerEl = document.createElement('div');
    questionContainerElement.appendChild(timerEl);
    
    // Define language buttons
    const sqlButton = document.getElementById('sql-btn');
    const javaButton = document.getElementById('java-btn');
    const pythonButton = document.getElementById('python-btn');
    const bharathamButton = document.getElementById('bharatham-btn');
  
    // Event listeners for language buttons
    sqlButton.addEventListener('click', function() {
      startQuiz('SQL');
    });
  
    javaButton.addEventListener('click', function() {
      startQuiz('Java');
    });
  
    pythonButton.addEventListener('click', function() {
      startQuiz('Python');
    });

    bharathamButton.addEventListener('click', function() {
      startQuiz('Bharatham');
    });
  
    let currentQuiz = 0;
    let timeLeft = 1200;
    let shuffledQuestions, currentQuestionIndex;
  
    function startQuiz(language) {
      // Hide language buttons
      document.getElementById('language').style.display = 'none';
  
      // Define questions based on the selected language
      let questions;

      if (language === 'SQL') {
        questions = [
          {
            question: 'What is the full form of SQL?',
            answers: [
              { text: 'Structure Query Language', correct: false },
              { text: 'Structured Query Language', correct: true },
              { text: 'Sample Query Language', correct: false },
              { text: 'Sequential Query Language', correct: false }
            ]
          },
          {
            question: 'Which SQL statement is used to extract data from a database?',
            answers: [
              { text: 'GET', correct: false },
              { text: 'OPEN', correct: false },
              { text: 'SELECT', correct: true },
              { text: 'EXTRACT', correct: false }
            ]
          },
          {
            question: 'Which SQL clause is used to filter the result set?',
            answers: [
              { text: 'WHERE', correct: true },
              { text: 'HAVING', correct: false },
              { text: 'FROM', correct: false },
              { text: 'SELECT', correct: false }
            ]
          },
          {
            question: 'Which keyword is used to sort the result-set in SQL?',
            answers: [
              { text: 'ORDER', correct: false },
              { text: 'SORT BY', correct: false },
              { text: 'ORDER BY', correct: true },
              { text: 'GROUP BY', correct: false }
            ]
          },
          {
            question: 'Which SQL function is used to count the number of rows?',
            answers: [
              { text: 'COUNT()', correct: true },
              { text: 'SUM()', correct: false },
              { text: 'TOTAL()', correct: false },
              { text: 'CALC()', correct: false }
            ]
          },
          {
            question: 'What does the SQL statement DELETE do?',
            answers: [
              { text: 'Removes a table', correct: false },
              { text: 'Removes rows from a table', correct: true },
              { text: 'Deletes the entire database', correct: false },
              { text: 'Erases column data', correct: false }
            ]
          },
          {
            question: 'Which of these is a valid SQL data type?',
            answers: [
              { text: 'IntegerText', correct: false },
              { text: 'String', correct: false },
              { text: 'VARCHAR', correct: true },
              { text: 'DecimalChar', correct: false }
            ]
          },
          {
            question: 'Which SQL clause is used to group rows that have the same values?',
            answers: [
              { text: 'GROUP BY', correct: true },
              { text: 'ORDER BY', correct: false },
              { text: 'FILTER BY', correct: false },
              { text: 'SORT BY', correct: false }
            ]
          },
          {
            question: 'What is the purpose of the JOIN clause in SQL?',
            answers: [
              { text: 'To join two SQL queries', correct: false },
              { text: 'To combine rows from two or more tables', correct: true },
              { text: 'To create a new table', correct: false },
              { text: 'To filter results', correct: false }
            ]
          },
          {
            question: 'Which SQL keyword is used to insert new data into a table?',
            answers: [
              { text: 'APPEND', correct: false },
              { text: 'ADD', correct: false },
              { text: 'INSERT INTO', correct: true },
              { text: 'NEW ROW', correct: false }
            ]
          },
          {
            question: 'Which SQL statement is used to modify data in a table?',
            answers: [
              { text: 'ALTER', correct: false },
              { text: 'MODIFY', correct: false },
              { text: 'CHANGE', correct: false },
              { text: 'UPDATE', correct: true }
            ]
          },
          {
            question: 'What does the HAVING clause do in SQL?',
            answers: [
              { text: 'Limits the number of records', correct: false },
              { text: 'Filters grouped records', correct: true },
              { text: 'Joins two tables', correct: false },
              { text: 'Sorts records', correct: false }
            ]
          },
          {
            question: 'Which statement is used to create a new table in SQL?',
            answers: [
              { text: 'CREATE TABLE', correct: true },
              { text: 'MAKE TABLE', correct: false },
              { text: 'NEW TABLE', correct: false },
              { text: 'ADD TABLE', correct: false }
            ]
          },
          {
            question: 'Which SQL clause is used to remove duplicate records?',
            answers: [
              { text: 'DISTINCT', correct: true },
              { text: 'UNIQUE', correct: false },
              { text: 'DELETE', correct: false },
              { text: 'CLEAR', correct: false }
            ]
          },
          {
            question: 'Which operator is used for pattern matching in SQL?',
            answers: [
              { text: 'LIKE', correct: true },
              { text: 'MATCHES', correct: false },
              { text: 'EQUALS', correct: false },
              { text: 'SEARCH', correct: false }
            ]
          }
        ];
      }

      if (language === 'Java') {
        questions = [
            {
              question: 'Who invented Java Programming?',
              answers: [
                { text: 'James Gosling', correct: true },
                { text: 'Guido van Rossum', correct: false },
                { text: 'Dennis Ritchie', correct: false },
                { text: 'Bjarne Stroustrup', correct: false }
              ]
            },
            {
              question: 'Which component is used to compile, debug and execute the java programs?',
              answers: [
                { text: 'JRE', correct: false },
                { text: 'JIT', correct: false },
                { text: 'JDK', correct: true },
                { text: 'JVM', correct: false }
              ]
            },
            {
              question: 'Which statement is true about Java?',
              answers: [
                { text: 'Java is a sequence-dependent programming language', correct: false },
                { text: 'Java is a code dependent programming language', correct: false },
                { text: 'Java is a platform-dependent programming language', correct: false },
                { text: ' Java is a platform-independent programming language', correct: true }
              ]
            },
            {
              question: ' Which of the following is not an OOPS concept in Java?',
              answers: [      
                { text: 'Polymorphism', correct: false },
                { text: 'Inheritance', correct: false },
                { text: 'Encapsulation', correct: false },
                { text: 'Abstract', correct: true }
              ]
            },
            {
              question: ' What is not the use of “this” keyword in Java?',
              answers: [ 
                { text: 'Referring to the instance variable when a local variable has the same name', correct: false },
                { text: 'Passing itself to the method of the same class', correct: true },
                { text: 'Passing itself to another method', correct: false },
                { text: 'Calling another constructor in constructor chaining', correct: false}
              ]
            },
            {
              question: 'Which of these keywords are used for the block to be examined for exceptions?',
              answers: [
                { text: 'check', correct: false },
                { text: 'throw', correct: false },
                { text: 'catch', correct: false },
                { text: 'try', correct: true }
              ]
            },
            {
              question: 'What is the numerical range of a char data type in Java?',
              answers: [
                { text: '0 to 256', correct: false },
                { text: '0 to 65535', correct: true },
                { text: '-128 to 127', correct: false },
                { text: '0 to 32767', correct: false }
              ]
            },
            {
              question: 'Which of these packages contains the exception Stack Overflow in Java?',
              answers: [
                { text: 'java.lang', correct: true },
                { text: 'java.util', correct: false },
                { text: 'java.system', correct: false },
                { text: 'java.io', correct: false }
              ]
            },
            {
              question: 'Which of the following is a superclass of every class in Java?',
              answers: [
                { text: 'ArrayList', correct: false },
                { text: 'Abstract class', correct: false },
                { text: 'Object class', correct: true },
                { text: 'String', correct: false }
              ]
            },
            {
              question: 'Which of these keywords is used to define interfaces in Java?',
              answers: [
                { text: 'InterFace', correct: false },
                { text: 'interface', correct: true },
                { text: 'Interface', correct: false },
                { text: 'interFace', correct: false }
              ]
            },
            {
              question: 'Which of these are selection statements in Java?',
              answers: [ 
                { text: 'break', correct: false },
                { text: 'continue', correct: false },
                { text: 'if()', correct: true },
                { text: 'for()', correct: false }
              ]
            },
            {
              question: 'Which of the following is a type of polymorphism in Java Programming?',
              answers: [
                { text: 'Compile time polymorphism', correct: true },
                { text: 'Multiple polymorphism', correct: false },
                { text: 'Multilevel polymorphism', correct: false },
                { text: 'Execution time polymorphism', correct: false }
              ]
            }
          ];
      }
      if (language === 'Python') {
        questions = [
          {
            question: 'What is the maximum length of a Python identifier?',
            answers: [
              { text: 'No fixed length is specified', correct: true },
              { text: '32', correct: false },
              { text: '128', correct: false },
              { text: '16', correct: false }
            ]
          },
          {
            question: 'Who developed Python Programming Language?',
            answers: [
              { text: 'Wick van Rossum', correct: false },
              { text: 'Rasmus Lerdorf', correct: false },
              { text: 'Guido van Rossum', correct: true },
              { text: 'Niene Stom', correct: false }
            ]
          },
          {
            question: 'Which type of Programming does Python support?',
            answers: [
              { text: 'object-oriented programming',correct: false },
              { text: 'structured programming', correct: false },
              { text: 'functional programming', correct: false },
              { text: 'all of the mentioned', correct: true }
            ]
          },
          {
            question: 'Which of the following is used to define a block of code in Python language?',
            answers: [
              { text: 'Indentation', correct: true },
              { text: ' Key', correct: false },
              { text: 'Brackets', correct: false },
              { text: 'All of the mentioned', correct: false }
            ]
          },
          {
            question: 'Which keyword is used for function in Python language?',
            answers: [
              { text: 'Function', correct: false },
              { text: 'def', correct: true },
              { text: 'Define', correct: false },
              { text: 'Fun', correct: false }
            ]
          },
          {
            question: 'Python supports the creation of anonymous functions at runtime, using a construct called __________',
            answers: [
              { text: 'pi', correct: false },
              { text: 'anonymous', correct: false },
              { text: 'lambda', correct: true },
              { text: 'none of the mentioned', correct: false }
            ]
          },
          {
            question: 'What is the order of precedence in python?',
            answers: [
              { text: ' Exponential, Parentheses, Multiplication, Division, Addition, Subtraction', correct: false },
              { text: 'Exponential, Parentheses, Division, Multiplication, Addition, Subtraction', correct: false },
              { text: 'Parentheses, Exponential, Multiplication, Division, Subtraction, Addition', correct: false },
              { text: 'Parentheses, Exponential, Multiplication, Division, Addition, Subtraction', correct: true }
            ]
          },
          {
            question: 'What does pip stand for python?',
            answers: [
              { text: 'Pip Installs Python', correct: false },
              { text: 'Pip Installs Packages', correct: false },
              { text: 'Preferred Installer Program', correct: true },
              { text: 'All of the mentioned', correct: false }
            ]
          },
          {
            question: 'Which of the following is the truncation division operator in Python?',
            answers: [
              { text: '|', correct: false },
              { text: '//', correct: true },
              { text: '/', correct: false },
              { text: '%', correct: false }
            ]
          },
          {
            question: 'Which of these is the definition for packages in Python?',
            answers: [
              { text: 'A set of main modules', correct: false },
              { text: 'A set of programs making use of Python modules', correct: false },
              { text: 'A number of files containing Python definitions and statements', correct: false },
              { text: 'A folder of python modules', correct: true }
            ]
          },
          {
            question: 'Which one of the following is not a keyword in Python language?',
            answers: [
              { text: 'pass', correct: false },
              { text: 'assert', correct: false },
              { text: 'eval', correct: true },
              { text: 'nonlocal', correct: false }
            ]
          },
          {
            question: 'To add a new element to a list we use which Python command?',
            answers: [
              { text: 'list1.append(5)', correct: true },
              { text: 'list1.addEnd(5)', correct: false },
              { text: 'list1.add(5)', correct: false },
              { text: 'list1.addLast(5)', correct: false }
            ]
          },
          {
            question: 'The process of pickling in Python includes ____________',
            answers: [
              { text: 'conversion of a Python object hierarchy into byte stream', correct: true },
              { text: 'conversion of a datatable into a list', correct: false },
              { text: 'conversion of a byte stream into Python object hierarchy', correct: false },
              { text: 'conversion of a list into a datatable', correct: false }
            ]
          },
          {
            question: 'PVM is often called _________.',
            answers: [
              { text: 'Python interpreter', correct: true },
              { text: 'Python compiler', correct: false },
              { text: 'Python volatile machine', correct: false },
              { text: 'Portable virtual machine', correct: false }
            ]
          },
          {
            question: 'Which of the following objects are present in the function header in python?',
            answers: [
              { text: 'Only function name', correct: false },
              { text: 'Function name and Parameters', correct: true },
              { text: 'Only parameters', correct: false },
              { text: 'None of the these', correct: false }
            ]
          },
          {
            question: 'Which of the following is true about local variables?',
            answers: [
              { text: 'Accessible throughout the program', correct: false },
              { text: 'Accessible in all functions', correct: false },
              { text: 'Accessible only in that function', correct: true },
              { text: 'Accessible only in the similar functions', correct: false }
            ]
          }
        ]; 
      }
      if (language === 'Bharatham') {
        questions =[
           {
            question: 'పాండవుల్లో వయస్సు ప్రకారం పెద్దవాడు ఎవరు?',
            answers: [
              { text: 'అర్జునుడు', correct: false },
              { text: 'సహదేవుడు', correct: false },
              { text: 'యుధిష్ఠిరుడు', correct: true },
              { text: 'నకులుడు', correct: false }
            ]
          },
          {
            question: 'కర్ణుని తల్లి ఎవరు?',
            answers: [
              { text: 'కుంతి', correct: true },
              { text: 'ద్రౌపది', correct: false },
              { text: 'గాంధారి', correct: false },
              { text: 'సుభద్రా', correct: false }
            ]
          },
          {
            question: 'అర్జునుడి ధనుస్సు పేరు ఏమిటి?',
            answers: [
              { text: 'పినాక', correct: false },
              { text: 'శారంగం', correct: false },
              { text: 'గాండీవం', correct: true },
              { text: 'విజయం', correct: false }
            ]
          },
          {
            question: 'మహాభారతం రచయిత ఎవరు?',
            answers: [
              { text: 'వాల్మీకి', correct: false },
              { text: 'వేదవ్యాసుడు', correct: true },
              { text: 'కాళిదాసు', correct: false },
              { text: 'తులసీదాస్', correct: false }
            ]
          },
          {
            question: 'పాండవులు మరియు కౌరవులకు గురువు ఎవరు?',
            answers: [
              { text: 'కృపాచార్యుడు', correct: false },
              { text: 'ద్రోణాచార్యుడు', correct: true },
              { text: 'భృగు', correct: false },
              { text: 'పరశురాముడు', correct: false }
            ]
          },
          {
            question: 'కౌరవులు ఎన్ని మంది?',
            answers: [
              { text: '50', correct: false },
              { text: '100', correct: true },
              { text: '101', correct: false },
              { text: '108', correct: false }
            ]
          },
          {
            question: 'ద్రౌపదికి తండ్రి ఎవరు?',
            answers: [
              { text: 'ద్రుపదుడు', correct: true },
              { text: 'శల్యుడు', correct: false },
              { text: 'విరాటుడు', correct: false },
              { text: 'భీష్ముడు', correct: false }
            ]
          },
          {
            question: 'ద్రోణాచార్యుని ఎవరు హతించారు?',
            answers: [
              { text: 'అర్జునుడు', correct: false },
              { text: 'భీముడు', correct: false },
              { text: 'దృష్టద్యుమ్నుడు', correct: true },
              { text: 'అభిమన్యుడు', correct: false }
            ]
          },
          {
            question: 'అర్జునుడి రథ సారథి ఎవరు?',
            answers: [
              { text: 'ద్రోణుడు', correct: false },
              { text: 'భీష్ముడు', correct: false },
              { text: 'కృష్ణుడు', correct: true },
              { text: 'యుధిష్ఠిరుడు', correct: false }
            ]
          },
          {
            question: 'పాండవులు మరియు కౌరవుల మధ్య యుద్ధం పేరు ఏది?',
            answers: [
              { text: 'రామాయణ', correct: false },
              { text: 'కురుక్షేత్ర యుద్ధం', correct: true },
              { text: 'ధర్మ యుద్ధం', correct: false },
              { text: 'కీలింగ్ యుద్ధం', correct: false }
            ]
          },
          {
            question: 'అభిమన్యునిపై అన్యాయంగా యుద్ధం చేసినది ఎవరు?',
            answers: [
              { text: 'పాండవులు', correct: false },
              { text: 'రాక్షసులు', correct: false },
              { text: 'కౌరవులు', correct: true },
              { text: 'యాదవులు', correct: false }
            ]
          },
          {
            question: 'అర్జునుడి శంఖం పేరు ఏమిటి?',
            answers: [
              { text: 'పాంచజన్య', correct: true },
              { text: 'శంకహష్టం', correct: false },
              { text: 'పొపట', correct: false },
              { text: 'దధిమతి', correct: false }
            ]
          },
          {
            question: 'కర్ణుని ధర్మ నిబద్ధతను మెచ్చిన వ్యక్తి ఎవరు?',
            answers: [
              { text: 'దుర్యోధనుడు', correct: false },
              { text: 'కర్ణుడు', correct: false },
              { text: 'భీష్ముడు', correct: true },
              { text: 'శకుని', correct: false }
            ]
          },
          {
            question: 'దుర్యోధనను ఎవరు హతించారు?',
            answers: [
              { text: 'అర్జునుడు', correct: false },
              { text: 'భీముడు', correct: true },
              { text: 'యుధిష్ఠిరుడు', correct: false },
              { text: 'నకులుడు', correct: false }
            ]
          },
          {
            question: 'శికంధి గత జన్మలో ఎవరు?',
            answers: [
              { text: 'అంబ', correct: true },
              { text: 'సత్యవతి', correct: false },
              { text: 'గంగా', correct: false },
              { text: 'రాధ', correct: false }
            ]
          },
          {
            question: 'భగవద్గీత బోధనలు ఇచ్చినది ఎవరు?',
            answers: [
              { text: 'యుధిష్ఠిర', correct: false },
              { text: 'వ్యాస', correct: false },
              { text: 'కృష్ణ', correct: true },
              { text: 'భీష్మ', correct: false }
            ]
          },
          {
            question: 'అజ్ఞాతవాసంలో అర్జునుడు ఏ వేషం ధరించాడు?',
            answers: [
              { text: 'రసికుడు', correct: false },
              { text: 'గంధర్వుడు', correct: false },
              { text: 'బృహన్నల', correct: true },
              { text: 'యజ్ఞపతి', correct: false }
            ]
          },
          {
            question: 'మహాభారతంలో యుద్ధం అనంతరం హస్తినాపుర రాజ్యాధికారి ఎవరు?',
            answers: [
              { text: 'దుర్యోధన', correct: false },
              { text: 'భీష్మ', correct: false },
              { text: 'యుధిష్ఠిర', correct: true },
              { text: 'అశ్వత్థామ', correct: false }
            ]
          },
          {
            question: 'పాండవులకు శాపం విధించిన ఋషి ఎవరు?',
            answers: [
              { text: 'దధీచి', correct: false },
              { text: 'దుర్వాస', correct: true },
              { text: 'వశిష్ఠ', correct: false },
              { text: 'విశ్వామిత్ర', correct: false }
            ]
          },
          {
            question: 'కర్ణని పెంచుకున్న తల్లి ఎవరు?',
            answers: [
              { text: 'కుంతి', correct: false },
              { text: 'మద్రి', correct: false },
              { text: 'రాధ', correct: false },
              { text: 'అంబ', correct: true }
            ]
          },
          {
            question: 'భీముడికి ఎంతమంది సంతానం ఉన్నారు?',
            answers: [
              { text: '1', correct: false },
              { text: '3', correct: false },
              { text: '5', correct: false },
              { text: '2', correct: true }
            ]
          },
          {
            question: 'పాండవులు నిర్మించిన కొత్త రాజధాని పేరు ఏమిటి?',
            answers: [
              { text: 'ఇంద్రప్రస్థం', correct: true },
              { text: 'హస్తినాపురం', correct: false },
              { text: 'ద్వారకా', correct: false },
              { text: 'వృత్తం', correct: false }
            ]
          },
          {
            question: 'భీముడు ఏ రాక్షసుని హతించాడు?',
            answers: [
              { text: 'హిడింబాసుర', correct: true },
              { text: 'అలంభుష', correct: false },
              { text: 'అలయుధ', correct: false },
              { text: 'వేదావతిక్', correct: false }
            ]
          },
          {
            question: 'భీష్మ పితామహుని అసలు పేరు ఏమిటి?',
            answers: [
              { text: 'దేవవ్రత', correct: true },
              { text: 'కారుణ్య', correct: false },
              { text: 'పారమిత', correct: false },
              { text: 'ధర్మాత్మ', correct: false }
            ]
          },
          {
           question: 'ఎంత దినంలో ద్రోణాచార్యుడు హతమయ్యాడు?',
    answers: [
      { text: '14వ రోజు', correct: false },
      { text: '15వ రోజు', correct: false },
      { text: '16వ రోజు', correct: false },
      { text: '13వ రోజు', correct: true }
    ]
          },
          {
            question: 'ద్రోణాచార్యుని హత్యకు ప్రేరేపించిన యోధుడు ఎవరు?',
            answers: [
              { text: 'అర్జునుడు', correct: false },
              { text: 'భీముడు', correct: false },
              { text: 'దృష్టద్యుమ్నుడు', correct: true },
              { text: 'యుధిష్ఠిరుడు', correct: false }
            ]
          },
          {
            question: 'చంద్రహాస రాజు ఏ యదవ వంశానికి చెందాడు?',
            answers: [
              { text: 'కుంతల', correct: true },
              { text: 'కౌరవ', correct: false },
              { text: 'పాండవాసుర', correct: false },
              { text: 'యదవ', correct: false }
            ]
          },
          {
            question: 'అర్జునుడికి ధనుస్సును ఎవరు ప్రసాదించారు?',
            answers: [
              { text: 'ఇంద్రుడు', correct: false },
              { text: 'శివుడు', correct: false },
              { text: 'వారుణుడు', correct: false },
              { text: 'అగ్ని దేవుడు', correct: true }
            ]
          },
          {
            question: 'అభిమన్యుని కుమారుని పేరు ఏమిటి?',
            answers: [
              { text: 'పరిక్షిత్తు', correct: true },
              { text: 'సత్యతీకు', correct: false },
              { text: 'జనమేజయుడు', correct: false },
              { text: 'అనురాగ్', correct: false }
            ]
          },
          {
            question: 'జనమేజయుడు ఏ యాగం నిర్వహించాడు?',
            answers: [
              { text: 'రాజసూయ యాగం', correct: false },
              { text: 'అశ్వమేధ యాగం', correct: false },
              { text: 'సర్ప సత్ర యాగం', correct: true },
              { text: 'పుత్రకామేశ్టి యాగం', correct: false }
            ]
          }
        ];
        //  [
        //   {
        //     question: 'Who was the eldest of the Pandavas?',
        //       answers: [
        //         { text: 'Arjuna', correct: false },
        //         { text: 'Sahadeva', correct: false },
        //         { text: 'Yudhishthira', correct: true },
        //         { text: 'Nakula', correct: false }
        //       ]
        //   },
        //   {
        //     question: 'Who was the mother of Karna?',
        //       answers: [
        //         { text: 'Kunti', correct: true },
        //         { text: 'Draupadi', correct: false },
        //         { text: 'Gandhari', correct: false },
        //         { text: 'Subhadra', correct: false }
        //       ]
        //   },
        //   {
        //     question: 'What was the name of Arjuna’s bow?',
        //       answers: [
        //         { text: 'Pinaka', correct: false },
        //         { text: 'Sharanga', correct: false },
        //         { text: 'Gandiva', correct: true },
        //         { text: 'Vijaya', correct: false }
        //       ]
        //   },
        //   {
        //     question: 'Who composed the Mahabharata?',
        //       answers: [
        //         { text: 'Tulsidas', correct: false },
        //         { text: 'Valmiki', correct: false },
        //         { text: 'Ved Vyasa', correct: true },
        //         { text: 'Kalidasa', correct: false }
        //       ]
        //   },
        //   {
        //     question: 'Who was the teacher of both the Pandavas and Kauravas?',
        //       answers: [
        //         { text: 'Kripacharya', correct: false },
        //         { text: 'Dronacharya', correct: true },
        //         { text: 'Bhrigu', correct: false },
        //         { text: 'Parashurama', correct: false }
        //       ]
        //   },
        //   {
        //     question: 'How many Kaurava brothers were there?',
        //       answers: [
        //         { text: '50', correct: false },
        //         { text: '100', correct: true },
        //         { text: '101', correct: false },
        //         { text: '108', correct: false }
        //       ]
        //   },
        //   {
        //     question: 'Who was Draupadi’s father?',
        //       answers: [
        //         { text: 'Drupada', correct: true },
        //         { text: 'Shalya', correct: false },
        //         { text: 'Virata', correct: false },
        //         { text: 'Bhishma', correct: false }
        //       ]
        //   },
        //   {
        //     question: 'What was the name of Bhima’s mace?',
        //       answers: [
        //         { text: 'Sharanga', correct: false },
        //         { text: 'Kaumodaki', correct: false },
        //         { text: 'Vajra', correct: false },
        //         { text: 'Gada', correct: true }
        //       ]
        //   },
        //   {
        //     question: 'Who killed Dronacharya in the war?',
        //       answers: [
        //         { text: 'Arjuna', correct: false },
        //         { text: 'Bhima', correct: false },
        //         { text: 'Dhrishtadyumna', correct: true },
        //         { text: 'Abhimanyu', correct: false }
        //       ]
        //   },
        //   {
        //     question: 'Who was the charioteer of Arjuna?',
        //       answers: [
        //         { text: 'Drona', correct: false },
        //         { text: 'Bhishma', correct: false },
        //         { text: 'Krishna', correct: true },
        //         { text: 'Yudhishthira', correct: false }
        //       ]
        //   },
        //   {
        //     question: 'What was the name of the war between the Pandavas and Kauravas?',
        //       answers: [
        //         { text: 'Ramayana', correct: false },
        //         { text: 'Kurukshetra War', correct: true },
        //         { text: 'Dharma Yudh', correct: false },
        //         { text: 'Kalinga War', correct: false }
        //       ]
        //   },
        //   {
        //     question: 'Who broke the rules and attacked Abhimanyu in a group?',
        //       answers: [
        //         { text: 'Pandavas', correct: false },
        //         { text: 'Rakshasas', correct: false },
        //         { text: 'Kauravas', correct: true },
        //         { text: 'Yadavas', correct: false }
        //       ]
        //   },
        //   {
        //     question: 'What was the name of Karna’s divine armor?',
        //       answers: [
        //         { text: 'Kavacha and Kundala', correct: true },
        //         { text: 'Gandiva', correct: false },
        //         { text: 'Sharanga', correct: false },
        //         { text: 'Paduka', correct: false }
        //       ]
        //   },
        //   {
        //     question: 'Who was known for his vow of celibacy and loyalty to Hastinapur?',
        //       answers: [
        //         { text: 'Duryodhana', correct: false },
        //         { text: 'Karna', correct: false },
        //         { text: 'Bhishma', correct: true },
        //         { text: 'Shakuni', correct: false }
        //       ]
        //   },
        //   {
        //     question: 'Who killed Duryodhana in the war?',
        //       answers: [
        //         { text: 'Arjuna', correct: false },
        //         { text: 'Bhima', correct: true },
        //         { text: 'Yudhishthira', correct: false },
        //         { text: 'Nakula', correct: false }
        //       ]
        //   },
        //   {
        //     question: 'Who was Shikhandi in a previous birth?',
        //       answers: [
        //         { text: 'Amba', correct: true },
        //         { text: 'Satyavati', correct: false },
        //         { text: 'Ganga', correct: false },
        //         { text: 'Radha', correct: false }
        //       ]
        //   },
        //   {
        //     question: 'Who gave the Bhagavad Gita teachings?',
        //       answers: [
        //         { text: 'Yudhishthira', correct: false },
        //         { text: 'Vyasa', correct: false },
        //         { text: 'Krishna', correct: true },
        //         { text: 'Bhishma', correct: false }
        //       ]
        //   },
        //   {
        //     question: 'Which Pandava was skilled in sword fighting and horse riding?',
        //       answers: [
        //         { text: 'Sahadeva', correct: false },
        //         { text: 'Nakula', correct: true },
        //         { text: 'Bhima', correct: false },
        //         { text: 'Yudhishthira', correct: false }
        //       ]
        //   },
        //   {
        //     question: 'What was the disguise of Arjuna during exile?',
        //       answers: [
        //         { text: 'A cook', correct: false },
        //         { text: 'A teacher', correct: false },
        //         { text: 'A eunuch named Brihannala', correct: true },
        //         { text: 'A priest', correct: false }
        //       ]
        //   },
        //   {
        //     question: 'Who was the king of Hastinapur at the end of Mahabharata?',
        //       answers: [
        //         { text: 'Duryodhana', correct: false },
        //         { text: 'Bhishma', correct: false },
        //         { text: 'Yudhishthira', correct: true },
        //         { text: 'Ashwatthama', correct: false }
        //       ]
        //  }
        // ];
      }
      startGame(questions);
    }
    
    nextButton.addEventListener('click', () => {
        if (currentQuestionIndex < shuffledQuestions.length - 1) {
          currentQuestionIndex++; // Increment the index of the current question
          setNextQuestion(); // Display the next question
        } else {
          endQuiz(); // End the quiz if there are no more questions remaining
        }
      });

    submitButton.addEventListener('click', () => {
      endQuiz(); // Call the endQuiz function when submit button is clicked
    });
      
    function startGame(questions) {
      shuffledQuestions = questions.sort(() => Math.random() - 0.5);
      currentQuestionIndex = 0;
      questionContainerElement.classList.remove('hide');
  
      const timerInterval = setInterval(() => {
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;
        timerEl.textContent = `Time Left: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        timeLeft--; 
        if (timeLeft < 0) {
            clearInterval(timerInterval); 
            endQuiz(); 
        }
      }, 1000);
  
      setNextQuestion();
    }
  
    function setNextQuestion() {
      resetState();
      showQuestion(shuffledQuestions[currentQuestionIndex]);
    }
  
    function showQuestion(question) {
      questionElement.innerText = question.question;
      question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
          button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
      });
    }
  
    function selectAnswer(e) {
      const selectedButton = e.target;
      const correct = selectedButton.dataset.correct;
      const answers = shuffledQuestions[currentQuestionIndex].answers;
  
      answers.forEach(answer => {
        answer.selected = false; // Reset all answers' selected state
      });
  
      selectedButton.dataset.selected = true; // Mark the selected answer
  
      setStatusClass(document.body, correct);
      Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
      });
  
      // Mark the selected answer in the shuffledQuestions array
      const selectedAnswerText = selectedButton.innerText;
      const selectedAnswer = answers.find(answer => answer.text === selectedAnswerText);
      if (selectedAnswer) {
        selectedAnswer.selected = true;
      }
      // Show the next button if there are more questions remaining
      if (currentQuestionIndex < shuffledQuestions.length - 1) {
        nextButton.classList.remove('hide');
      } else {
        // Hide submit button if it's the last question
        submitButton.innerText = 'Submit';
        submitButton.classList.remove('hide');
      }
    }
  
    function endQuiz() {
      const { totalQuestions, correctAnswers, wrongAnswers } = validation();
      
      const scorePopup = `
        Correct Answers: ${correctAnswers}
        Wrong Answers: ${wrongAnswers}
        Total Questions: ${totalQuestions}
      `;
       
      alert(scorePopup);
      location.reload(); 
    }
  
    function validation() {
      let totalQuestions = shuffledQuestions.length;
      let correctAnswers = 0;
      let wrongAnswers = 0;
  
      shuffledQuestions.forEach(question => {
        question.answers.forEach(answer => {
          if (answer.selected && answer.correct) {
            correctAnswers++;
          } else if (answer.selected && !answer.correct) {
            wrongAnswers++;
          }
        });
      });
      return { totalQuestions, correctAnswers, wrongAnswers };
    }
  
    function resetState() {
      clearStatusClass(document.body);
      nextButton.classList.add('hide');
      while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
      }
    }
  
    function setStatusClass(element, correct) {
      clearStatusClass(element);
      if (correct) {
        element.classList.add('correct');
      } else {
        element.classList.add('wrong');
      }
    }
  
    function clearStatusClass(element) {
      element.classList.remove('correct');
      element.classList.remove('wrong');
    }
});
