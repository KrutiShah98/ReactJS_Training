node js : environment for javascript - using of node we can execute and run js files 

which is provide npm and npx 

=>  npm : node package manager  - using of npm we can install packages 

=>  npx : node package executer - using of npx we can execute package 


----------------------------------------------
LTS : long term support 

need to check version of node js 

node -v 

npm -v 

----------------------
for react installation : 


npm install create-react-app 

or 

npm install -g create-react-app 

------------------------------
for project creation  (traditional method ) 

npx create-react-app <projectname>

cd projectname  (cd means change directory)

npm start 

# now  you can run http://localhost:3000

--------------------------------------------------
latest react project creation 

npm create vite
or 
npm create vite@latest 

cd projectname

npm install 

npm run dev

--------------------------------------
package.json : which main configuration file of the project 
            which is contain install package (dependency) name and version name 

            "dependencies": {
                "react": "^18.2.0",
                "react-dom": "^18.2.0"
            },

package-lock.json : contain all in detail information of installed dependencies

index.html : main render file 
-----------------------------------------
Component : block of code. which we can reuse anywhere many times 

e.g.   <App/>

ReactDom  : using of ReactDom we can render component on browser.

jsx : javascript can allow html element in it .

    jsx convert html tag into react element.


---------------------------------------------------------------
state : state is a behaviour of component 

        it is mutable property (we can change it)

        for.  car - color - black   at purchase 

             car - color - white   at delivery 

             here, we are changing state of car color 


-------------------------------------------
There are two types of components 

1) function component  : easy to understand 
2) class Component  : it is complex to use - it is inherited by Component class 

    class component have render() method which return jsx 

    in function component there is direct return jsx

---------------------------------
Spread Operator : to combine multiple array in single array 
its called spread operator which is donated by ... (dot operator or spread operator )


var myarray = ["C","C++","Java","Python","Node","React"]
console.log(myarray)
var newArray = [...myarray,"MERNSTACK"]
console.log(newArray)
VM1191:2 (6) ['C', 'C++', 'Java', 'Python', 'Node', 'React']
VM1191:4 (7) ['C', 'C++', 'Java', 'Python', 'Node', 'React', 'MERNSTACK']



e.g. 

var a1 = [1,2,3]
var a2 = [3,2,4]

var a3 = [...a1,...a2]


---------------------------------
props : property of component 

    using of props we can transfer data parent component to child component 

    props are immutable ( we can't change it value )

     <childComponent key="value">


-------------------------------------------
Hook is a specific function with the help of hook functions we can 
manage many state of function component and 
manage lifecycle of function component.

there are many popular hooks available for example , useState() , useEffect() , useContext() ... 
and many more 

-----------------------------
useEffect : useEffect is a most popular hook function . 
    using of useEffect we can controll side effect of function component.

    for example : api fetching , render specific code when specific event occur.

    syntax : 

    useEffect(callback,dependencies)

    when we don't pass any dependencies it will run useEffect every time 


------------------------------
no dependencies useEffect 

    1) useEffect(callback) : it will invoke every event perform 

        or 

       useEffect(callback,[]) : no dependencies - call every time 

    2) useEffect(callback,[count]) : it depend on count 

    3) useEffect(callback,[]) : blank dependencies so it will invoke once in a program 

    
    


