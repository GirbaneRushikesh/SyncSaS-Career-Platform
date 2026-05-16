import React from "react";
import { Routes, Route } from "react-router-dom";

import GigSearchPage from "./modules/freelance/gig-search/pages/GigSearchPage";
import GigDetailPage from "./modules/freelance/gig-search/pages/GigDetailPage";
import CreateGigPage from "./modules/freelance/gig-search/pages/CreateGigPage";
import ClientDashboard from "./modules/freelance/gig-search/pages/ClientDashboard";
import ProfilePage from "./pages/ProfilePage";
import CompanyPage from "./pages/CompanyPage";
import BookmarksPage from "./modules/freelance/gig-search/pages/BookmarksPage";
import MessagingPage from "./modules/freelance/gig-search/pages/MessagingPage";
import ReviewPage from "./modules/freelance/gig-search/pages/ReviewPage";
import FreelancerProfilePage from "./modules/freelance/gig-search/pages/FreelancerProfilePage";
import ProposalSubmissionPage from "./modules/freelance/gig-search/pages/ProposalSubmissionPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<GigSearchPage />} />
    <Route path="/gig/:id" element={<GigDetailPage />} />
    <Route path="/create" element={<CreateGigPage />} />
    <Route path="/client" element={<ClientDashboard />} />
    <Route path="/profile" element={<ProfilePage />} />
    <Route path="/company" element={<CompanyPage />} />
    <Route path="/bookmarks" element={<BookmarksPage />} />
    <Route path="/messages" element={<MessagingPage />} />
    <Route path="/reviews" element={<ReviewPage />} />
    <Route path="/freelancer/:id" element={<FreelancerProfilePage />} />
    <Route path="/gig/:id/propose" element={<ProposalSubmissionPage />} />
  </Routes>
);

export default AppRoutes;