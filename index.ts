import inquirer from 'inquirer';
class wordcounter{
    async func(){
        const answers:{
             sentence:string,
        }= await inquirer.prompt([
            {
                name:'sentence',
                type:'input',
                message:'Enter your word sentencer to count',
            }
        ])
        
        const words=answers.sentence.trim().split(" ");
        console.log(` the word are counted ${words}`);
    }

}
let per=new wordcounter();
per.func();