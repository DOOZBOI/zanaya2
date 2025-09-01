import React, { useState, useEffect } from 'react';
import { BookingData, Religion, KitItem, Service } from './types';
import { religions } from './data/religions';
import { religionKits } from './data/kits';
import { services } from './data/services';

import { StepIndicator } from './components/StepIndicator';
import { ReligionSelector } from './components/ReligionSelector';
import { KitSelector } from './components/KitSelector';
import { ServiceSelector } from './components/ServiceSelector';
import { PersonalInfoForm } from './components/PersonalInfoForm';
import { OrderSummary } from './components/OrderSummary';
import { ConfirmationPage } from './components/ConfirmationPage';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const STEPS = [
  'Religion',
  'Kit Items',
  'Services', 
  'Personal Info',
  'Review',
  'Confirmation'
];

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [bookingData, setBookingData] = useState<BookingData>({
    religion: null,
    selectedKitItems: [],
    selectedServices: [],
    personalInfo: {
      name: '',
      address: '',
      phone: ''
    }
  });

  // Auto-select essential items when religion is selected
  useEffect(() => {
    if (bookingData.religion) {
      const kit = religionKits.find(k => k.religionId === bookingData.religion?.id);
      if (kit) {
        const essentialItems = kit.items.filter(item => item.required);
        setBookingData(prev => ({
          ...prev,
          selectedKitItems: essentialItems
        }));
      }
    }
  }, [bookingData.religion]);

  const handleReligionSelect = (religion: Religion) => {
    setBookingData(prev => ({ ...prev, religion }));
  };

  const handleKitItemToggle = (item: KitItem) => {
    if (item.required) return; // Cannot toggle required items

    setBookingData(prev => {
      const isSelected = prev.selectedKitItems.some(selected => selected.id === item.id);
      const updatedItems = isSelected
        ? prev.selectedKitItems.filter(selected => selected.id !== item.id)
        : [...prev.selectedKitItems, item];
      
      return { ...prev, selectedKitItems: updatedItems };
    });
  };

  const handleServiceToggle = (service: Service) => {
    setBookingData(prev => {
      const isSelected = prev.selectedServices.some(selected => selected.id === service.id);
      const updatedServices = isSelected
        ? prev.selectedServices.filter(selected => selected.id !== service.id)
        : [...prev.selectedServices, service];
      
      return { ...prev, selectedServices: updatedServices };
    });
  };

  const handlePersonalInfoUpdate = (info: typeof bookingData.personalInfo) => {
    setBookingData(prev => ({ ...prev, personalInfo: info }));
  };

  const canProceedToNext = () => {
    switch (currentStep) {
      case 0: return bookingData.religion !== null;
      case 1: return bookingData.selectedKitItems.length > 0;
      case 2: return true; // Services are optional
      case 3: return bookingData.personalInfo.name && bookingData.personalInfo.address && bookingData.personalInfo.phone;
      case 4: return true;
      default: return false;
    }
  };

  const nextStep = () => {
    if (canProceedToNext() && currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    setCurrentStep(5); // Move to confirmation page
  };

  const getCurrentStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <ReligionSelector
            religions={religions}
            selectedReligion={bookingData.religion}
            onSelect={handleReligionSelect}
          />
        );
      
      case 1:
        if (!bookingData.religion) return null;
        const kit = religionKits.find(k => k.religionId === bookingData.religion.id);
        if (!kit) return null;
        
        return (
          <KitSelector
            religion={bookingData.religion}
            availableItems={kit.items}
            selectedItems={bookingData.selectedKitItems}
            onToggleItem={handleKitItemToggle}
          />
        );
      
      case 2:
        return (
          <ServiceSelector
            services={services}
            selectedServices={bookingData.selectedServices}
            onToggleService={handleServiceToggle}
          />
        );
      
      case 3:
        return (
          <PersonalInfoForm
            personalInfo={bookingData.personalInfo}
            onUpdate={handlePersonalInfoUpdate}
          />
        );
      
      case 4:
        return (
          <OrderSummary
            bookingData={bookingData}
            onSubmit={handleSubmit}
          />
        );
      
      case 5:
        return <ConfirmationPage />;
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Last Rites Services
            </h1>
            <p className="text-gray-600 flex items-center justify-center gap-2">
              Respectful and dignified farewell services
              <Heart size={16} className="text-red-500" />
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Step Indicator */}
        {currentStep < 5 && (
          <StepIndicator
            currentStep={currentStep}
            totalSteps={5}
            stepLabels={STEPS.slice(0, 5)}
          />
        )}

        {/* Step Content */}
        <div className="mb-12">
          {getCurrentStepContent()}
        </div>

        {/* Navigation */}
        {currentStep < 4 && (
          <div className="flex justify-between items-center max-w-4xl mx-auto">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                currentStep === 0
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              <ChevronLeft size={20} />
              Previous
            </button>
            
            <div className="flex-1 text-center">
              <p className="text-sm text-gray-600">
                Step {currentStep + 1} of {STEPS.length - 1}
              </p>
            </div>

            <button
              onClick={nextStep}
              disabled={!canProceedToNext()}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                canProceedToNext()
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              Next
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            © 2024 Last Rites Services. Serving with compassion and respect.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            24/7 Emergency Contact: +91 8273441052
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;