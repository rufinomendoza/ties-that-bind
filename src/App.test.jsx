import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

// Mock window.scrollTo since it's not implemented in jsdom
beforeEach(() => {
  window.scrollTo = vi.fn();
});

describe('App Navigation and Views', () => {
  
  it('renders the Home view by default', async () => {
    render(<App />);
    
    // Check for Hero text specific to Home
    // Using findBy because HomeView is lazy-loaded via Suspense
    expect(await screen.findByText(/BROTHERHOOD/i)).toBeInTheDocument();
    expect(screen.getByText(/HARMONY/i)).toBeInTheDocument();
    expect(screen.getByText(/HISTORY/i)).toBeInTheDocument();
    
    // Check for Home-specific CTAs
    // Note: The text in HomeView.jsx contains smart quotes “ ”
    expect(screen.getByRole('button', { name: /Stream “And So It Goes”/i })).toBeInTheDocument();
  });

  it('navigates to the Box Office (Agenda) view', async () => {
    render(<App />);
    
    // Click the Navigation Link
    // The nav label is "Box Office", not "Agenda"
    const navLink = await screen.findByRole('button', { name: /Box Office/i });
    fireEvent.click(navLink);

    // Verify Agenda Header
    // SectionHeader title is "The 2026 Season"
    expect(await screen.findByRole('heading', { name: /The 2026 Season/i })).toBeInTheDocument();
    expect(screen.getByText(/Tickets & Gatherings/i)).toBeInTheDocument();

    // Verify at least one event is rendered
    expect(screen.getByText(/Cherry Tree Massacre/i)).toBeInTheDocument();
  });

  it('navigates to the Listening Room (Discography) view', async () => {
    render(<App />);
    
    // The nav label is "Listening Room"
    const navLink = await screen.findByRole('button', { name: /Listening Room/i });
    fireEvent.click(navLink);

    // Header title in DiscographyView.jsx is "The Listening Room"
    expect(await screen.findByRole('heading', { name: /The Listening Room/i })).toBeInTheDocument();
    
    // Verify an album is present
    expect(screen.getByText(/Desperate Chimes, Desperate Measures/i)).toBeInTheDocument();
  });

  it('navigates to the Patronage (Philanthropy) view', async () => {
    render(<App />);
    
    // The nav label is "Patronage"
    const navLink = await screen.findByRole('button', { name: /Patronage/i });
    fireEvent.click(navLink);

    // Header title in PhilanthropyView.jsx is "Patronage"
    expect(await screen.findByRole('heading', { name: /Patronage/i })).toBeInTheDocument();
    
    // Verify donor tiers are present
    expect(screen.getByText(/The Donor Guild/i)).toBeInTheDocument();
    expect(screen.getByText(/The 1946 Society/i)).toBeInTheDocument();
  });

  it('navigates to the Haberdasher (Store) view', async () => {
    render(<App />);
    
    // The nav label is "Haberdasher"
    const navLink = await screen.findByRole('button', { name: /Haberdasher/i });
    fireEvent.click(navLink);

    // Header title in StoreView.jsx is "The Haberdashery"
    expect(await screen.findByRole('heading', { name: /The Haberdashery/i })).toBeInTheDocument();
    expect(screen.getByText(/Specially Commissioned/i)).toBeInTheDocument();
    
    // Verify products
    expect(screen.getByText(/The Silk Necktie/i)).toBeInTheDocument();
  });

  it('navigates to the Backstage view', async () => {
    render(<App />);
    
    // The nav label is "Backstage"
    const navLink = await screen.findByRole('button', { name: /Backstage/i });
    fireEvent.click(navLink);

    // Header title in BackstageView.jsx is "Backstage"
    expect(await screen.findByRole('heading', { name: /Backstage/i })).toBeInTheDocument();
    
    // Verify internal links
    expect(screen.getByText(/GleeManager/i)).toBeInTheDocument();
    expect(screen.getByText(/Slack/i)).toBeInTheDocument();
  });

});

describe('Interactions and Detail Views', () => {

  it('opens an Event Detail view when clicking an event', async () => {
    render(<App />);
    
    // Navigate to Agenda
    const navLink = await screen.findByRole('button', { name: /Box Office/i });
    fireEvent.click(navLink);

    // Find and click the specific event text
    // We wait for the list to load
    const eventCards = await screen.findAllByText(/Cherry Tree Massacre/i);
    fireEvent.click(eventCards[0]);

    // Check for Detail View specific elements
    // The return button text is "Return to the Box Office"
    expect(await screen.findByRole('button', { name: /Return to the Box Office/i })).toBeInTheDocument();
    
    // Check for Venue info which is prominent in detail view
    expect(screen.getByText(/Gaston Hall/i)).toBeInTheDocument();
  });

  it('opens an Album Detail view when clicking an album', async () => {
    render(<App />);
    
    // Navigate to Archive
    const navLink = await screen.findByRole('button', { name: /Listening Room/i });
    fireEvent.click(navLink);

    // Click on "36th & Prospect"
    const albumTitle = await screen.findByText(/36th & Prospect/i);
    fireEvent.click(albumTitle);

    // Check for Detail View specific elements
    // The return button text is "Return to the Listening Room"
    expect(await screen.findByRole('button', { name: /Return to the Listening Room/i })).toBeInTheDocument();
    
    // AlbumDetailView uses "Repertoire" not "Tracklist"
    expect(screen.getByText(/Repertoire/i)).toBeInTheDocument();
    
    // Check for a specific track from that album
    expect(screen.getByText(/Soul to Soul/i)).toBeInTheDocument();
  });

  it('can return to Agenda from Event Detail', async () => {
    render(<App />);
    
    // Go to Agenda -> Event
    const navLink = await screen.findByRole('button', { name: /Box Office/i });
    fireEvent.click(navLink);
    
    const eventCards = await screen.findAllByText(/Cherry Tree Massacre/i);
    fireEvent.click(eventCards[0]);

    // Click Return
    const returnBtn = await screen.findByRole('button', { name: /Return to the Box Office/i });
    fireEvent.click(returnBtn);

    // Should be back on Agenda
    expect(await screen.findByRole('heading', { name: /The 2026 Season/i })).toBeInTheDocument();
    // Detail view button should be gone
    expect(screen.queryByRole('button', { name: /Return to the Box Office/i })).not.toBeInTheDocument();
  });

});