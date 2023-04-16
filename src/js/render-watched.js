import { DatabaseAPI } from './firebase/database-api';

const { getWatchedList, getQueueList, getListItem } = new DatabaseAPI();

console.log(getWatchedList());
