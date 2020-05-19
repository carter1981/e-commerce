import { all, call } from 'redux-saga/effects';
import {fetchCollectionsStart, shopSagas} from './shop/shop.saga';
import { userSagas } from './user/user-sagas';
import { cartSagas } from './cart/cart-sagas';

export default function* rootSaga() {
  yield all([
    call(shopSagas),
    call(fetchCollectionsStart),
    call(userSagas),
    call(cartSagas)
  ]);
}
