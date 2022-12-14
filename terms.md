## [Процеду́рное программи́рование](https://ru.wikipedia.org/wiki/Процедурное_программирование)
Программирование на императивном языке, при котором последовательно выполняемые операторы можно собрать в подпрограммы, то есть более крупные целостные единицы кода, с помощью механизмов самого языка.

## [Функциона́льное программи́рование](https://ru.wikipedia.org/wiki/Функциональное_программирование)
Парадигма программирования, в которой процесс вычисления трактуется как вычисление значений функций в математическом понимании последних (в отличие от функций как подпрограмм в процедурном программировании).

Противопоставляется парадигме императивного программирования, которая описывает процесс вычислений как последовательное изменение состояний (в значении, подобном таковому в теории автоматов). При необходимости, в функциональном программировании вся совокупность последовательных состояний вычислительного процесса представляется явным образом, например, как список. 

> Различие между процедурным и функциональном программировании:
Процедурное программирование разделяет последовательности операторов и условных конструкций на отдельные блоки, называемые процедурами, которые параметризуются по аргументам, которые являются (нефункциональными) значениями. Функциональное программирование - это то же самое, за исключением того, что функции являются значениями первого класса, поэтому они могут передаваться в качестве аргументов другим функциям и возвращаться как результаты вызовов функций.

## [Структу́рное программи́рование](https://ru.wikipedia.org/wiki/Структурное_программирование)
Парадигма программирования, в основе которой лежит представление программы в виде иерархической структуры блоков.

>Блок (также говорят блок кода, блок команд, блок инструкций) в программировании — это логически сгруппированный набор идущих подряд инструкций в исходном коде программы, является основой парадигмы структурного программирования.

В соответствии с парадигмой, любая программа, которая строится без использования оператора goto, состоит из трёх базовых управляющих конструкций: последовательность, ветвление, цикл; кроме того, используются подпрограммы. При этом разработка программы ведётся пошагово, методом «сверху вниз».

## [Объе́ктно-ориенти́рованное программи́рование (ООП)](https://ru.wikipedia.org/wiki/Объектно-ориентированное_программирование)
Методология программирования, основанная на представлении программы в виде совокупности взаимодействующих объектов, каждый из которых является экземпляром определённого класса, а классы образуют иерархию наследования.

Идеологически, ООП — подход к программированию как к моделированию информационных объектов, решающий на новом уровне основную задачу структурного программирования: структурирование информации с точки зрения управляемости, что существенно улучшает управляемость самим процессом моделирования, что, в свою очередь, особенно важно при реализации крупных проектов.
#### Основные концепции ООП:
* [Инкапсуляция](https://ru.wikipedia.org/wiki/Инкапсуляция_(программирование))
Это заключение данных и функциональности в оболочку. В объектно-ориентированном программировании в роли оболочки выступают классы: они не только собирают переменные и методы в одном месте, но и защищают их от вмешательства извне (сокрытие).
> something
*  [Наследование](https://ru.wikipedia.org/wiki/Наследование_(программирование))
Это концепция, согласно которой одни классы, называемые родительскими, могут лежать в основе других — дочерних. При этом, дочерние классы перенимают свойства и поведение своего родителя.
> something

* [Полиморфизм](https://ru.wikipedia.org/wiki/Полиморфизм_(информатика))
Один из главных столпов объектно-ориентированного программирования. Его суть заключается в том, что один фрагмент кода(метод, оператор или объект) может работать с разными типами данных.
**Полиморфизм функции len()**
```
print(len("Programiz"))
print(len(["Python", "Java", "C"]))
print(len({"Name": "John", "Address": "Nepal"}))
```

> Здесь мы можем увидеть, что различные типы данных, такие как строка, список, кортеж, множество и словарь могут работать с функцией len(). Однако, мы можем увидеть, что она возвращает специфичную для каждого типа данных информацию.

* [Абстракция]()
В широком смысле абстракция — это когда мы фокусируемся на тех свойствах системы, которые важны в рамках текущей задачи, а менее существенные отбрасываем.
Абстрактные классы в объектно-ориентированном программировании — это базовые классы, которые можно наследовать, но нельзя реализовывать. То есть на их основе нельзя создать объект.
> Пример такого класса из жизни — животное. Рыбы, пауки и насекомые являются животными, но каждое из них также принадлежит своему подклассу с набором специфических свойств. При этом, просто «животных» в природе не существует.


## [Императи́вное программи́рование](https://ru.wikipedia.org/wiki/Императивное_программирование) 
Парадигма программирования (стиль написания исходного кода компьютерной программы), для которой характерно следующее:

* В исходном коде программы записываются инструкции (команды);
* Инструкции должны выполняться последовательно;
* Данные, получаемые при выполнении предыдущих инструкций, могут читаться из памяти последующими инструкциями;
* Данные, полученные при выполнении инструкции, могут записываться в память.

Императивная программа похожа на приказы, выражаемые повелительным наклонением в естественных языках, то есть представляют собой последовательность команд, которые должен выполнить процессор.

## Операторное программирование 
Это общее определение процесса программирования, в котором запись последовательности отдельных машинных команд, либо в двоичном коде, либо в мнемокоде, заменяется написанием операторов, более понятных людям. Но каждый оператор требует последующей обработки– компиляции или интерпретации, при которой, один оператор может быть заменен большим количеством машинных команд, необходимых для выполнения оператора.

## [Паради́гма программи́рования](https://ru.wikipedia.org/wiki/Парадигма_программирования)
Это совокупность идей и понятий, определяющих стиль написания компьютерных программ (подход к программированию). Это способ [концептуализации](https://ru.wikipedia.org/wiki/Концептуализация_(лингвистика)), определяющий организацию вычислений и структурирование работы, выполняемой компьютером.

Парадигма программирования не определяется однозначно языком программирования; практически все современные языки программирования в той или иной мере допускают использование различных парадигм (мультипарадигменное программирование).

#### [Мультипарадигменное программирование](https://ru.wikipedia.org/wiki/Мультипарадигменное_программирование)
Программирование с одновременным использованием множества парадигм.
Основные подходы к организации мультипарадигменного программирования:

* Создание нового языка программирования,
* Расширение существующего языка программирования,
* Встраиваемые интерпретаторы,
* Расширяемые интерпретаторы,
* Трансляция из одного языка в другой,
* Сборка модулей, написанных на разных языках программирования,
* Библиотечное расширение существующего языка программирования.

> Как дополнительный пример, можно совместить процедурное программирование и объектно ореинтированное.
