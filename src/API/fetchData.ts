import axios from 'axios';
import { IUser } from '../interfaces/IUser';

class FetchData {
  private smallDataUrl: string = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
  private largetDataUrl: string = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

  async getData(type: string): Promise<IUser[]> {
    try {
      const { data } = await axios.get(type === 'small' ? this.smallDataUrl : this.largetDataUrl);
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}
const fetchData = new FetchData();
export { fetchData };