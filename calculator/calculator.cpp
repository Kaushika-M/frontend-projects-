#include<iostream>
using namespace std;

class Cal{
public:
    int x;
    int y;
    char c;

    void calculate(){
        while(1){            
        cout<<"Enter first number: ";
        cin>>x;
        cout<<"Enter second number: ";
        cin>>y;    
        cout<<"Enter operator(+,-,*,/,%,to exit enter e): ";
        cin>>c;

        switch(c){
            case '+':
                cout<<"Result = "<< x + y;
                break;
            case '-':
                cout<<"Result = "<< x - y;
                break;
            case '*':
                cout<<"Result = "<< x * y;
                break;
            case '/':
                if(y == 0)
                    cout<<"Division by zero is not possible";
                else
                    cout<<"Result = "<<x / y;
                break;
            case '%':
                if(y==0)
                    cout<<"Modulo by zero is not possible";
                else    
                    cout<<"Result = "<<(int)x%(int)y;
                break; 
            case 'e':exit(0);break;           
            default:
                cout << "Invalid operator";
        }
    } 
    }  
};
int main(){
     cout<<"----CALCULATOR----"<<endl;    
     Cal c1;
     c1.calculate();
    return 0;
}