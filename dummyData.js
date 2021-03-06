import  User   from './src/server/models/users.model';
import promisify from 'es6-promisify'

export default async function () {
  User.count().exec(async (err, count) => {
    if (count > 0) {
      return;
    }
    

    const desc1 = `Sed ut perspiciatis unde omnis iste natus error
      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
      ipsum quia dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      `;

    const desc2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      `;

    const admin1 = new User({ 
                           name: 'Admin', email: 'admin@gmail.com',
                           role:'ADMIN', 
                           image: 'https://static.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg',
                           desc: desc1
                           });
   
                         
    const dev1 = new User({ 
                           name: 'sghir',
                           role: 'DEVELOPER',
                           email: 'sghir@imist.ma',
                           image: 'https://static.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg',
                           devid: 'cikqgkv4q01ck7453ualdn3hf',
                           desc: desc2
                           });
                           const client1 = new User({ 
                            name: 'bigClient',
                            role: 'CLIENT',
                            email: 'client@company.com',
                           
                            });                       
    const register = promisify(User.register,User)
    await register(admin1,'dev1pass'); 
    await register(dev1,'dev1pass');
    await register(client1,'client1pass');     
    User.create([admin1, dev1], (error) => {
      if (!error) {
        console.log('ready to go....devs created');
      }
      else {
        console.log(error)
      }
    });
  });
}
