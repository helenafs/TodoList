import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.model';


//metadonnees de la classe - decorator
@Component({
  selector: 'app-root', //tag html <app-root>
  templateUrl: './app.component.html',//appelle o app.component.html
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[]=[];
  /**résultat: vazio variable en TypeScript, pour donner le type il
  faut mettre : et après le type. Le type any signifie que tu peut
  mettre quelque type dedans et aussi plus d'un type dedans,
  même un json {message: 'test'}**/

  public title: String = "To Do List";//titre de la todo liste

  public form: FormGroup;


  //ctor : chaque fois qu'on appelle le composant il appelle cette constructor
  // this en TypeScript se refere a la classe e non juste a la fonction come em JS
  constructor(private fb: FormBuilder) {
    //push() pour mettre un article dans la liste
    //dans ce cas les taches a realizer aujourd'hui
    //this.todos.push(new Todo(1,'RDZ avec DR. Dupont',false));
    //this.todos.push(new Todo(2,'acheter du riz',false));
    //this.todos.push(new Todo(3,'finir le rapport de Psychologie',true));

    //initialiser le formulaire
    //les controleurs du formulaire ({title:[], ...})
    this.form = this.fb.group({
      title:["", Validators.compose([
        Validators.minLength(3),//3 caracteres
        Validators.maxLength(100),//100 caracteres
        Validators.required
      ])]
    });
  }

  /**methode splice,
   * rencontrer le article a effacer a partir de son id splice(index, qnt a effacer)**/
  //un paramètre todo du type Todo
  delete(todo:Todo){
    const index = this.todos.indexOf(todo);
    // au cas ou il y a rien dans le tableau l'index c'est -1
    if(index != -1){
      this.todos.splice(index,1);
    }
  }

  markAsDone(todo:Todo){
    todo.done=true;
  }

  markAsUndone(todo:Todo){
    todo.done = false;
  }

  //pour additioner nouvelles tâches
  add(){

    const title = this.form.controls['title'].value;
    const id = this.todos.length+1;
    this.todos.push(new Todo(id,title,false));
    this.save();
    this.clear();

  }


  clear(){
    this.form.reset();
  }


  //sauvegarder les tâches dans le local storage
  save(){
    const data = JSON.stringify(this.todos); //convertir le json en string
    localStorage.setItem('todos',data);
  }

}


