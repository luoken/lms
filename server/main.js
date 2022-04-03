import { Meteor } from 'meteor/meteor';
import { StudentsCollection} from '/imports/api/students';

function insertStudent({ name, birthYear, parent, email, group }){
  StudentsCollection.insert({ name, birthYear, parent, email, group, createdAt: new Date()});
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (StudentsCollection.find().count() === 0){
    insertStudent({
      name: 'John',
      birthYear: 2018,
      parent: 'Sue',
      email: 'sue@gmail.com',
      group: 'Minnows'
    });

    insertStudent({
      name: 'Jane',
      birthYear: 2013,
      parent: 'Sue',
      email: 'sue@gmail.com',
      group: 'Dolphins'
    });

    insertStudent({
      name: 'Luke',
      birthYear: 2017,
      parent: 'Steve',
      email: 'Steve@gmail.com',
      group: 'Minnows'
    });

    insertStudent({
      name: 'Tina',
      birthYear: 2015,
      parent: 'Paula',
      email: 'paula@gmail.com',
      group: ''
    });

  }


});
