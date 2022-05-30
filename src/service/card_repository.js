import { getDatabase, ref, onValue, set, remove, off} from "firebase/database";

class  CardRepository { 
    constructor(app) {
        this.db = getDatabase();
    }

    syncCards(userId, onUpdate){
        const query = ref(this.db, `${userId}/cards`);
        onValue(query, (snapshot) => {
            const value = snapshot.val();
            //⭐value가 있다면 콜백함수 onUpdate를 호출해준다. 
            //⭐value === cards!!! value는 cards이다
            value && onUpdate(value);
        })
        //⭐update가 끝나면 계속 sync되는것을 해지하는 off()함수를 return 해야한다.
        return () => off(query);
    }

    saveCard(userId, card){
        set(ref(this.db, `${userId}/cards/${card.id}`), card);
    }

    removeCard(userId, card) {
        remove(ref(this.db, `${userId}/cards/${card.id}`));
    }
}

export default CardRepository;