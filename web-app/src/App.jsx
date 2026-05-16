import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import NavBar from "./components/NavBar";

// context providers (point to existing files)
import { DarkModeProvider } from "./context/DarkModeContext";
import { BookmarkProvider } from "./modules/freelance/gig-search/context/BookmarkContext";
import { ReviewProvider } from "./modules/freelance/gig-search/context/ReviewContext";
import { GigProvider } from "./modules/freelance/gig-search/context/GigContext";

const App = () => (
  <DarkModeProvider>
    <BookmarkProvider>
      <ReviewProvider>
        <GigProvider>
          <BrowserRouter>
            <NavBar />
            <main className="container">
              <AppRoutes />
            </main>
          </BrowserRouter>
        </GigProvider>
      </ReviewProvider>
    </BookmarkProvider>
  </DarkModeProvider>
);

export default App;