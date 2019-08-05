import Gun from 'gun/gun';
import 'gun/lib/open';
import 'gun/lib/load';
import 'gun/lib/unset';
const gun = Gun(['http://localhost:7700/gun']);
(window as any).gun = gun;

export default gun;
