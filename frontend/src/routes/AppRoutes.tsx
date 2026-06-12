import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import Dashboard from "../pages/Dashboard";
import DesignStudio from "../pages/DesignStudio";
import DocumentEditor from "../pages/DocumentEditor";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import PDFWorkspace from "../pages/PDFWorkspace";
import PresentationStudio from "../pages/PresentationStudio";
import Projects from "../pages/Projects";
import ResumeBuilder from "../pages/ResumeBuilder";
import Settings from "../pages/Settings";
import Signup from "../pages/Signup";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/resume-builder" element={<ResumeBuilder />} />
          <Route path="/presentation-studio" element={<PresentationStudio />} />
          <Route path="/pdf-workspace" element={<PDFWorkspace />} />
          <Route path="/document-editor" element={<DocumentEditor />} />
          <Route path="/design-studio" element={<DesignStudio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
