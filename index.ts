import inquirer from 'inquirer';
class ATM{
    async mov(){
    type userType={
        name:string;
        pin:string;
        balance:number;
    }
    let user:userType={
        name:'Basil khan',
        pin:'1001',
        balance:1000000,
    }
    const resp=await inquirer.prompt([
        {
            name:'pin',
            type:'password',
            message:'Please enter pin',
        },
    ]);
    if(resp.pin!==user.pin){
        console.log('you have entered an incorrect pin');
    }else{
     const resp=await inquirer.prompt([
        {
            name:'selectedType',
            message:'please select an option',
            type:'list',
            choices:['withdraw','fastcash','balanceInquiry'],
        },
        {
            name:'amount',
            message:'enter an amount to withdraw',
            type:'number',
            when(resp){
                return resp.selectedType=='withdraw';

        },
    },
        {
            name:'amount',
            message:'select an amount to withdraw',
            type:'list',
            choices:['500','1000','2000','3000','4000','5000','10000','20000'],

            when(resp){
                return resp.selectedType=='fastcash';
            },
        },
    
     ]);
      if(resp.selectedType=='balanceInquiry'){
        console.log(user.balance);
      }else{
        user.balance=user.balance-resp.amount;
        console.log(user.balance);
      }
    }
} 
}
class ATM2 extends ATM{
    async bark(){
        do{await this.mov();
           var again=await inquirer.prompt({
                  name:'restart',
                  type:'input',
                  message:'If you want to continue than press y',

       });
    }     while(again.restart=='y'||
           again.restart=='yes'||
           again.restart=='YES')
  }


}
let person=new ATM2();
person.bark();
