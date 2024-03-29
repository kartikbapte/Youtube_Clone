// import { Provider } from "react-redux";
import { createBrowserRouter,BrowserRouter, Form, RouterProvider } from "react-router-dom";


import "./App.css";
import Body from "./components/Body";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";
import Head from "./components/Head";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
// import store from "./utils/store";
// import { useSelector, useDispatch } from 'react-redux';
// import { selectAuth, clearUser} from "./utils/authSlice"
// import GoogleLogin from './components/GoogleLogin';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "demo",
        element: (
          <>
            <Demo />
            <Demo2 />
          </>
        ),
      },
    ],
  },
]);

function App() {
 

  return (
    // <Provider store={store}>
      <div>
        {/* <Head /> */}
        <BrowserRouter  >
        <Head />
        </BrowserRouter >
        <RouterProvider router={appRouter}>
          
        </RouterProvider>

        {/**
         *
         * Head
         * Body
         *  Sidebar
         *    MenuItems
         *  MainContainer
         *    ButtonsList
         *    VideoContainer
         *      VideoCard
         *
         *
         * 
         */}
      </div>
    //  {/* </Provider>  */}
  );
}

export default App;
