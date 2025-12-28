import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import App from './App';

// Mock window.scrollTo since it's not implemented in jsdom
beforeEach(() => {
  window.scrollTo = vi.fn();
});

describe('App Navigation and Views', () => {
  
  it('renders the Home view by default', () => {
    render(<App />);
    
    // Check for Hero text specific to Home
    expect(screen.getByText(/FELLOWSHIP/i)).toBeInTheDocument();
    expect(screen.getByText(/HARMONY/i)).toBeInTheDocument();
    expect(screen.getByText(/LEGACY/i)).toBeInTheDocument();
    
    // Check for Home-specific CTAs
    expect(screen.getByRole('button', {gx: /Stream "And So It Goes"/i})).toBeInTheDocument();
  });

  it('navTvjgates to the Agenda view', () => {
    render(<App />);
    
    // Click the Navigation Link
    const navLink = screen.getByRole('button', { name: /Agenda/i });
    fireEvent.click(navLink);

    // Verify Agenda Header
    expect(screen.getByRole('heading', { name: /Agenda/i })).toBeInTheDocument();
    expect(screen.getByText(/2026/i)).toBeInTheDocument();

    // Verify at least one event is rendered
    expect(screen.getByText(/Cherry Tree Massacre/i)).toBeInTheDocument();
  });

  it('navigates to the Discography (Archive) view', () => {
    render(<App />);
    
    const navLink = screen.getByRole('button', { name: /Archive/i });
    fireEvent.click(navLink);

    expect(screen.getByRole('heading', { name: /Discography/i })).toBeInTheDocument();
    
    // Verify an album is present
    expect(screen.getByText(/Desperate Chimes, Desperate Measures/i)).toBeInTheDocument();
  });

  it('navigates to the Philanthropy (Patronage) view', () => {
    render(<App />);
    
    const navLink = screen.getByRole('button', { name: /Patronage/i });
    fireEvent.click(navLink);

    expect(screen.getByRole('heading', { name: /Fund the Brotherhood/i })).toBeInTheDocument();
    
    // Verify donor tiers are present
    expect(screen.getByText(/The Donor Guild/i)).toBeInTheDocument();
    expect(screen.getByText(/The 1946 Society/i)).toBeInTheDocument();
  });

  it('navigates to the Store (Atelier) view', () => {
    render(<App />);
    
    const navLink = screen.getByRole('button', { name: /Atelier/i });
    fireEvent.click(navLink);

    expect(screen.getByRole('heading', { name: /Atelier/i })).toBeInTheDocument();
    expect(screen.getByText(/Uniform & Regalia/i)).toBeInTheDocument();
    
    // Verify products
    expect(screen.getByText(/The Silk Necktie/i)).toBeInTheDocument();
  });

  it('navigates to the Backstage view', () => {
    render(<App />);
    
    const navLink = screen.getByRole('button', { name: /Backstage/i });
    fireEvent.click(navLink);

    expect(screen.getByRole('heading', { name: /Backstage/i })).toBeInTheDocument();
    
    // Verify internal links
    expect(screen.getByText(/GleeManager on Notion/i)).toBeInTheDocument();
    expect(screen.getByText(/Slack Workspace/i)).toBeInTheDocument();
  });

});

describe('Interactions and Detail Views', () => {

  it('opens an Event Detail view when clicking an event', () => {
    render(<App />);
    
    // Navigate to Agenda
    fireEvent.click(screen.getByRole('button', { name: /Agenda/i }));

    // Find and click the specific event text
    // We use getAllByText because the title might appear multiple times, we pick the first one which is usually in the list
    const eventCards = screen.getAllByText(/Cherry Tree Massacre/i);
    fireEvent.click(eventCards[0]);

    // Check for Detail View specific elements
    // The "Return to Agenda" button should appear
    expect(screen.getByRole('button', { name: /Return to Agenda/i })).toBeInTheDocument();
    
    // Check for Venue info which is prominent in detail view
    expect(screen.getByText(/GASTON HALL/i)).toBeInTheDocument();
  });

  it('opens an Album Detail view when clicking an album', () => {
    render(<App />);
    
    // Navigate to Archive
    fireEvent.click(screen.getByRole('button', { name: /Archive/i }));

    // Click on "36th & Prospect"
    const albumTitle = screen.getByText(/36th & Prospect/i);
    fireEvent.click(albumTitle);

    // Check for Detail View specific elements
    expect(screen.getByRole('button', { name: /Return to Index/i })).toBeInTheDocument();
    
    // Check for Tracklist presence
    expect(screen.getByText(/Tracklist/i)).toBeInTheDocument();
    
    // Check for a specific track from that album
    expect(screen.getByText(/Soul to Soul/i)).toBeInTheDocument();
  });

  it('can return to Agenda from Event Detail', () => {
    render(<App />);
    
    // Go to Agenda -> Event
    fireEvent.click(screen.getByRole('button', { name: /Agenda/i }));
    const eventCards = screen.getAllByText(/Cherry Tree Massacre/i);
    fireEvent.click(eventCards[0]);

    // Click Return
    const returnBtn = screen.getByRole('button', { name: /Return to Agenda/i });
    fireEvent.click(returnBtn);

    // Should be back on Agenda
    expect(screen.getByRole('heading', { name: /Agenda/i })).toBeInTheDocument();
    // Detail view button should be gone
    expect(screen.queryByRole('button', { name: /Return to Agenda/i })).not.toBeInTheDocument();
  });

});