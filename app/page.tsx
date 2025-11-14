export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="w-full min-h-screen">
        <div className="bg-white overflow-hidden min-h-screen flex flex-col">
          {/* Header */}
          <div className="bg-linear-to-br from-slate-50 to-blue-50 border-b border-blue-200 px-8 lg:px-16 py-10 lg:py-10 relative">
            {/* Subtle decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>

            <div className="relative z-10">
              <div>
                <h1 className="text-2xl lg:text-4xl font-semibold text-slate-800 mb-2 tracking-tight">
                  THEOMETRICS PREVEZA 
                </h1>
                <h2 className="text-lg lg:text-xl text-blue-700 font-medium mb-3">
                  ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε.
                </h2>
              </div>
            </div>
          </div>

          {/* Company Information */}
          <div className="px-8 lg:px-16 py-8 grow">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">
                  Στοιχεία Επικοινωνίας
                </h2>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-800">Διεύθυνση:</p>
                      <p className="text-gray-600">ΠΡΕΒΕΖΑ ΤΚ 48100</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-800">Email:</p>
                      <a
                        href="mailto:theomatrics.preveza@gmail.com"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        theomatrics.preveza@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legal Information */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">
                  Νομικά Στοιχεία
                </h2>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-gray-600">ΑΦΜ</p>
                    <p className="text-lg font-semibold text-gray-800">
                      803041155
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-gray-600">
                      Αριθμός Γ.Ε.ΜΗ.
                    </p>
                    <p className="text-lg font-semibold text-gray-800">
                      188028249000
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="mt-10">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
                Δραστηριότητες
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center mb-3">
                    <svg
                      className="w-6 h-6 text-blue-600 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                    </svg>
                    <h3 className="font-semibold text-blue-800">
                      Ενοικίαση Οχημάτων
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Υπηρεσίες ενοικίασης και χρηματοδοτικής μίσθωσης αυτοκινήτων
                    και ελαφρών μηχανοκίνητων οχημάτων
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-center mb-3">
                    <svg
                      className="w-6 h-6 text-green-600 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    <h3 className="font-semibold text-green-800">Ξενοδοχεία</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Ξενοδοχεία και παρόμοια καταλύματα για άνετη διαμονή των
                    πελατών μας
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <div className="flex items-center mb-3">
                    <svg
                      className="w-6 h-6 text-purple-600 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <h3 className="font-semibold text-purple-800">
                      Τουριστικές Υπηρεσίες
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Διάφορες τουριστικές υπηρεσίες για την καλύτερη εμπειρία των
                    επισκεπτών
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-8 lg:px-16 py-4 text-center text-gray-600">
            <p className="text-sm">
              © {new Date().getFullYear()} THEOMETRICS PREVEZA ΜΟΝΟΠΡΟΣΩΠΗ
              Ι.Κ.Ε. - Όλα τα δικαιώματα κατοχυρωμένα
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
