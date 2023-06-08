import FriendsSlams from './friendsSlams'
import MySlams from './mySlams'
import UserCopy from './userCopy'

const MainContent = () => {
  return (
    <div className="h-screen px-4 pb-24 mt-6 overflow-auto md:px-6">
      <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
        SLAM
      </h1>
      <h2 className="text-gray-400 text-md">
        Diviértete junto a tus amigos en el clásico juego.
      </h2>
      <UserCopy />
      <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-3">
        <MySlams />
        <FriendsSlams />
      </div>
    </div>
  )
}

export default MainContent