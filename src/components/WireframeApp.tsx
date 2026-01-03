import { useState } from 'react';
import { Home, Upload, Brain, CheckCircle, Download, DollarSign, Menu, User, Settings, HelpCircle, FileText, Layout, Zap } from 'lucide-react';

const WireframeApp = () => {
    const [activeScreen, setActiveScreen] = useState('landing');
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const screens = [
        { id: 'landing', name: 'Landing Page', icon: Home },
        { id: 'upload', name: 'Upload & Process', icon: Upload },
        { id: 'generate', name: 'AI Generation', icon: Brain },
        { id: 'compliance', name: 'Compliance Check', icon: CheckCircle },
        { id: 'export', name: 'Export & Cost', icon: Download },
        { id: 'dashboard', name: 'User Dashboard', icon: Layout }
    ];

    const NavButton = ({ screen }: { screen: typeof screens[number] }) => (
        <button
            onClick={() => setActiveScreen(screen.id)}
            className={`w-full px-4 py-2 text-left rounded-lg transition-all flex items-center gap-3 ${activeScreen === screen.id
                ? 'bg-blue-500 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
        >
            <screen.icon className="w-5 h-5" />
            <span className="text-sm font-medium">{screen.name}</span>
        </button>
    );

    // Landing Page
    const LandingPage = () => (
        <div className="space-y-6">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-white">
                <div className="max-w-3xl">
                    <h1 className="text-5xl font-bold mb-4">SmartBuildAI</h1>
                    <p className="text-xl mb-6">Transform Your Construction Plans with AI-Powered Design</p>
                    <div className="flex gap-4">
                        <div className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold cursor-pointer hover:shadow-lg">
                            Get Started
                        </div>
                        <div className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-bold cursor-pointer hover:bg-white hover:text-blue-600">
                            Watch Demo
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-3 gap-6">
                <div className="bg-white rounded-lg border-2 border-gray-200 p-6 hover:border-blue-500 transition-all">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <Upload className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Upload Plans</h3>
                    <p className="text-gray-600 text-sm">Upload PDFs, images, or scans of existing floor plans</p>
                </div>
                <div className="bg-white rounded-lg border-2 border-gray-200 p-6 hover:border-purple-500 transition-all">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                        <Brain className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">AI Generation</h3>
                    <p className="text-gray-600 text-sm">Generate optimized designs with AI algorithms</p>
                </div>
                <div className="bg-white rounded-lg border-2 border-gray-200 p-6 hover:border-green-500 transition-all">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Compliance</h3>
                    <p className="text-gray-600 text-sm">Automated building code validation</p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-white rounded-lg border-2 border-gray-200 p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Why Choose SmartBuildAI?</h2>
                <div className="grid grid-cols-3 gap-8 text-center">
                    <div>
                        <div className="text-4xl font-bold text-blue-600 mb-2">97%</div>
                        <p className="text-gray-600">Time Savings</p>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-purple-600 mb-2">80%</div>
                        <p className="text-gray-600">Cost Reduction</p>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                        <p className="text-gray-600">Code Compliant</p>
                    </div>
                </div>
            </div>
        </div>
    );

    // Upload & Process Screen
    const UploadScreen = () => (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Upload Your Floor Plan</h1>
                <div className="text-sm text-gray-600">Step 1 of 5</div>
            </div>

            {/* Upload Area */}
            <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-blue-500 transition-all cursor-pointer">
                <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Drag and drop your files here</h3>
                <p className="text-gray-600 mb-4">or click to browse</p>
                <p className="text-sm text-gray-500">Supported formats: PDF, JPG, PNG, TIFF (Max 50MB)</p>
                <div className="mt-6">
                    <div className="bg-blue-500 text-white px-6 py-2 rounded-lg inline-block">
                        Browse Files
                    </div>
                </div>
            </div>

            {/* Uploaded Files List */}
            <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
                <h3 className="font-bold text-lg mb-4">Uploaded Files (2)</h3>
                <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                            <FileText className="w-8 h-8 text-blue-600" />
                            <div>
                                <p className="font-medium">floor_plan_main.pdf</p>
                                <p className="text-sm text-gray-500">2.4 MB</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                                Processed
                            </div>
                            <button className="text-red-500 hover:text-red-700">×</button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                            <FileText className="w-8 h-8 text-blue-600" />
                            <div>
                                <p className="font-medium">existing_layout.jpg</p>
                                <p className="text-sm text-gray-500">1.8 MB</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium">
                                Processing...
                            </div>
                            <button className="text-red-500 hover:text-red-700">×</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between">
                <button className="px-6 py-2 border-2 border-gray-300 rounded-lg font-medium hover:bg-gray-50">
                    Back
                </button>
                <button className="px-6 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600">
                    Continue to AI Generation →
                </button>
            </div>
        </div>
    );

    // AI Generation Screen
    const GenerateScreen = () => (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">AI Design Generation</h1>
                <div className="text-sm text-gray-600">Step 2 of 5</div>
            </div>

            <div className="grid grid-cols-3 gap-6">
                {/* Left Panel - Configuration */}
                <div className="col-span-1 space-y-4">
                    <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
                        <h3 className="font-bold text-lg mb-4">Design Parameters</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Building Type</label>
                                <select className="w-full border-2 border-gray-300 rounded-lg px-3 py-2">
                                    <option>Residential - Single Family</option>
                                    <option>Residential - Multi Family</option>
                                    <option>Commercial</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Square Footage</label>
                                <input type="text" placeholder="2,500 sq ft" className="w-full border-2 border-gray-300 rounded-lg px-3 py-2" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Bedrooms</label>
                                <input type="number" placeholder="3" className="w-full border-2 border-gray-300 rounded-lg px-3 py-2" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Bathrooms</label>
                                <input type="number" placeholder="2" className="w-full border-2 border-gray-300 rounded-lg px-3 py-2" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Design Style</label>
                                <select className="w-full border-2 border-gray-300 rounded-lg px-3 py-2">
                                    <option>Modern</option>
                                    <option>Traditional</option>
                                    <option>Contemporary</option>
                                </select>
                            </div>
                        </div>
                        <button className="w-full mt-6 bg-purple-500 text-white py-3 rounded-lg font-bold hover:bg-purple-600">
                            <Brain className="w-5 h-5 inline mr-2" />
                            Generate Design
                        </button>
                    </div>
                </div>

                {/* Right Panel - Preview */}
                <div className="col-span-2 space-y-4">
                    <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-lg">Design Preview</h3>
                            <div className="flex gap-2">
                                <button className="px-4 py-2 border-2 border-gray-300 rounded-lg text-sm hover:bg-gray-50">2D View</button>
                                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm">3D View</button>
                            </div>
                        </div>
                        <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
                            <div className="text-center">
                                <Zap className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                <p className="text-gray-600">AI-generated floor plan will appear here</p>
                                <p className="text-sm text-gray-500 mt-2">Click "Generate Design" to begin</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
                        <h3 className="font-bold text-lg mb-4">Generation Progress</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                                <span className="text-sm">Semantic segmentation complete</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                                <span className="text-sm">Vector conversion complete</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                                <span className="text-sm">Topology analysis in progress...</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 border-2 border-gray-300 rounded-full" />
                                <span className="text-sm text-gray-400">Geometry generation pending</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between">
                <button className="px-6 py-2 border-2 border-gray-300 rounded-lg font-medium hover:bg-gray-50">
                    ← Back to Upload
                </button>
                <button className="px-6 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600">
                    Continue to Compliance Check →
                </button>
            </div>
        </div>
    );

    // Compliance Check Screen
    const ComplianceScreen = () => (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Building Code Compliance</h1>
                <div className="text-sm text-gray-600">Step 3 of 5</div>
            </div>

            {/* Compliance Status */}
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <CheckCircle className="w-12 h-12 text-green-600" />
                        <div>
                            <h3 className="text-xl font-bold text-green-800">Design Compliant</h3>
                            <p className="text-green-700">All building codes and regulations met</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-3xl font-bold text-green-600">98%</div>
                        <p className="text-sm text-green-700">Compliance Score</p>
                    </div>
                </div>
            </div>

            {/* Detailed Compliance Report */}
            <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
                    <h3 className="font-bold text-lg mb-4">IBC Compliance</h3>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                            <span className="text-sm">Egress Requirements</span>
                            <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                            <span className="text-sm">Fire Safety Standards</span>
                            <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                            <span className="text-sm">Structural Requirements</span>
                            <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                            <span className="text-sm">Accessibility (ADA)</span>
                            <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
                    <h3 className="font-bold text-lg mb-4">Local Zoning</h3>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                            <span className="text-sm">Setback Requirements</span>
                            <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                            <span className="text-sm">Height Restrictions</span>
                            <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="flex items-center justify-between p-3 bg-yellow-50 rounded">
                            <span className="text-sm">Lot Coverage (Minor Issue)</span>
                            <div className="text-yellow-600 text-xs font-medium">⚠ Warning</div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                            <span className="text-sm">Parking Requirements</span>
                            <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Warnings/Recommendations */}
            <div className="bg-yellow-50 border-2 border-yellow-500 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <span>⚠</span> Minor Recommendations
                </h3>
                <ul className="space-y-2 text-sm">
                    <li>• Lot coverage is at 45% (maximum allowed is 50%). Consider future expansions.</li>
                    <li>• Window placement in bedroom 2 could be optimized for better natural light.</li>
                </ul>
            </div>

            <div className="flex justify-between">
                <button className="px-6 py-2 border-2 border-gray-300 rounded-lg font-medium hover:bg-gray-50">
                    ← Back to Generation
                </button>
                <button className="px-6 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600">
                    Continue to Export →
                </button>
            </div>
        </div>
    );

    // Export & Cost Screen
    const ExportScreen = () => (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Export & Cost Estimation</h1>
                <div className="text-sm text-gray-600">Step 4 of 5</div>
            </div>

            <div className="grid grid-cols-2 gap-6">
                {/* Export Options */}
                <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
                    <h3 className="font-bold text-lg mb-4">Export Options</h3>
                    <div className="space-y-3">
                        <div className="border-2 border-blue-500 bg-blue-50 rounded-lg p-4 cursor-pointer">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Download className="w-6 h-6 text-blue-600" />
                                    <div>
                                        <p className="font-bold">Revit Plugin</p>
                                        <p className="text-sm text-gray-600">Direct import to Autodesk Revit</p>
                                    </div>
                                </div>
                                <input type="radio" name="export" checked className="w-4 h-4" />
                            </div>
                        </div>
                        <div className="border-2 border-gray-300 rounded-lg p-4 cursor-pointer hover:border-blue-300">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Download className="w-6 h-6 text-gray-600" />
                                    <div>
                                        <p className="font-bold">AutoCAD Plugin</p>
                                        <p className="text-sm text-gray-600">Export to AutoCAD format</p>
                                    </div>
                                </div>
                                <input type="radio" name="export" className="w-4 h-4" />
                            </div>
                        </div>
                        <div className="border-2 border-gray-300 rounded-lg p-4 cursor-pointer hover:border-blue-300">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Download className="w-6 h-6 text-gray-600" />
                                    <div>
                                        <p className="font-bold">DXF/JSON</p>
                                        <p className="text-sm text-gray-600">Standard CAD formats</p>
                                    </div>
                                </div>
                                <input type="radio" name="export" className="w-4 h-4" />
                            </div>
                        </div>
                        <div className="border-2 border-gray-300 rounded-lg p-4 cursor-pointer hover:border-blue-300">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <FileText className="w-6 h-6 text-gray-600" />
                                    <div>
                                        <p className="font-bold">PDF Report</p>
                                        <p className="text-sm text-gray-600">Comprehensive documentation</p>
                                    </div>
                                </div>
                                <input type="checkbox" className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                    <button className="w-full mt-6 bg-blue-500 text-white py-3 rounded-lg font-bold hover:bg-blue-600">
                        <Download className="w-5 h-5 inline mr-2" />
                        Download Files
                    </button>
                </div>

                {/* Cost Estimation */}
                <div className="space-y-6">
                    <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <DollarSign className="w-6 h-6 text-green-600" />
                            Cost Estimation
                        </h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center pb-3 border-b">
                                <span className="text-gray-600">Materials</span>
                                <span className="font-bold">$125,000</span>
                            </div>
                            <div className="flex justify-between items-center pb-3 border-b">
                                <span className="text-gray-600">Labor</span>
                                <span className="font-bold">$85,000</span>
                            </div>
                            <div className="flex justify-between items-center pb-3 border-b">
                                <span className="text-gray-600">Permits & Fees</span>
                                <span className="font-bold">$8,500</span>
                            </div>
                            <div className="flex justify-between items-center pb-3 border-b">
                                <span className="text-gray-600">Contingency (10%)</span>
                                <span className="font-bold">$21,850</span>
                            </div>
                            <div className="flex justify-between items-center pt-2">
                                <span className="font-bold text-lg">Total Estimated Cost</span>
                                <span className="font-bold text-2xl text-green-600">$240,350</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
                        <h3 className="font-bold text-lg mb-4">Bill of Materials</h3>
                        <div className="space-y-2 text-sm max-h-48 overflow-y-auto">
                            <div className="flex justify-between p-2 bg-gray-50 rounded">
                                <span>Framing Lumber (2x4)</span>
                                <span className="font-medium">2,400 linear ft</span>
                            </div>
                            <div className="flex justify-between p-2 bg-gray-50 rounded">
                                <span>Drywall (1/2")</span>
                                <span className="font-medium">3,200 sq ft</span>
                            </div>
                            <div className="flex justify-between p-2 bg-gray-50 rounded">
                                <span>Concrete (Foundation)</span>
                                <span className="font-medium">45 cubic yards</span>
                            </div>
                            <div className="flex justify-between p-2 bg-gray-50 rounded">
                                <span>Windows (Standard)</span>
                                <span className="font-medium">18 units</span>
                            </div>
                            <div className="flex justify-between p-2 bg-gray-50 rounded">
                                <span>Doors (Interior)</span>
                                <span className="font-medium">12 units</span>
                            </div>
                        </div>
                        <button className="w-full mt-4 border-2 border-blue-500 text-blue-600 py-2 rounded-lg font-medium hover:bg-blue-50">
                            View Full BOM
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex justify-between">
                <button className="px-6 py-2 border-2 border-gray-300 rounded-lg font-medium hover:bg-gray-50">
                    ← Back to Compliance
                </button>
                <button className="px-6 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600">
                    Complete & Save Project →
                </button>
            </div>
        </div>
    );

    // Dashboard Screen
    const DashboardScreen = () => (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">My Projects</h1>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600">
                    + New Project
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-4 gap-4">
                <div className="bg-white rounded-lg border-2 border-gray-200 p-4">
                    <p className="text-sm text-gray-600 mb-1">Total Projects</p>
                    <p className="text-3xl font-bold text-blue-600">12</p>
                </div>
                <div className="bg-white rounded-lg border-2 border-gray-200 p-4">
                    <p className="text-sm text-gray-600 mb-1">In Progress</p>
                    <p className="text-3xl font-bold text-yellow-600">3</p>
                </div>
                <div className="bg-white rounded-lg border-2 border-gray-200 p-4">
                    <p className="text-sm text-gray-600 mb-1">Completed</p>
                    <p className="text-3xl font-bold text-green-600">9</p>
                </div>
                <div className="bg-white rounded-lg border-2 border-gray-200 p-4">
                    <p className="text-sm text-gray-600 mb-1">Time Saved</p>
                    <p className="text-3xl font-bold text-purple-600">240h</p>
                </div>
            </div>

            {/* Projects List */}
            <div className="bg-white rounded-lg border-2 border-gray-200">
                <div className="p-6 border-b">
                    <h3 className="font-bold text-lg">Recent Projects</h3>
                </div>
                <div className="divide-y">
                    <div className="p-6 hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <Layout className="w-8 h-8 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Modern Family Home</h4>
                                    <p className="text-sm text-gray-600">2,500 sq ft • 3 bed, 2 bath</p>
                                    <p className="text-xs text-gray-500 mt-1">Last modified: 2 hours ago</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium mb-2">
                                    Completed
                                </div>
                                <p className="text-sm font-medium text-gray-600">$240,350</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                                    <Layout className="w-8 h-8 text-purple-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Downtown Condo Renovation</h4>
                                    <p className="text-sm text-gray-600">1,200 sq ft • 2 bed, 1 bath</p>
                                    <p className="text-xs text-gray-500 mt-1">Last modified: 1 day ago</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium mb-2">
                                    In Progress
                                </div>
                                <p className="text-sm font-medium text-gray-600">$128,900</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center">
                                    <Layout className="w-8 h-8 text-pink-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Suburban Ranch Addition</h4>
                                    <p className="text-sm text-gray-600">800 sq ft addition • 1 bed, 1 bath</p>
                                    <p className="text-xs text-gray-500 mt-1">Last modified: 3 days ago</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium mb-2">
                                    Draft
                                </div>
                                <p className="text-sm font-medium text-gray-600">$95,200</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gray-900 text-white transition-all duration-300 flex flex-col`}>
                {/* Logo */}
                <div className="p-4 border-b border-gray-700 flex items-center justify-between">
                    {sidebarOpen && <h2 className="text-xl font-bold">SmartBuildAI</h2>}
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-800 rounded">
                        <Menu className="w-5 h-5" />
                    </button>
                </div>

                {/* Navigation */}
                <div className="flex-1 p-4 space-y-2 overflow-y-auto">
                    <p className={`text-xs text-gray-400 mb-2 ${!sidebarOpen && 'hidden'}`}>WIREFRAME SCREENS</p>
                    {screens.map(screen => (
                        <NavButton key={screen.id} screen={screen} />
                    ))}
                </div>

                {/* Bottom Menu */}
                <div className="p-4 border-t border-gray-700 space-y-2">
                    <button className="w-full p-2 hover:bg-gray-800 rounded flex items-center gap-3">
                        <Settings className="w-5 h-5" />
                        {sidebarOpen && <span className="text-sm">Settings</span>}
                    </button>
                    <button className="w-full p-2 hover:bg-gray-800 rounded flex items-center gap-3">
                        <HelpCircle className="w-5 h-5" />
                        {sidebarOpen && <span className="text-sm">Help</span>}
                    </button>
                    <button className="w-full p-2 hover:bg-gray-800 rounded flex items-center gap-3">
                        <User className="w-5 h-5" />
                        {sidebarOpen && <span className="text-sm">Profile</span>}
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Bar */}
                <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <h2 className="text-xl font-bold text-gray-800">
                            {screens.find(s => s.id === activeScreen)?.name}
                        </h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                            Save Draft
                        </button>
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                            JD
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-8">
                    {activeScreen === 'landing' && <LandingPage />}
                    {activeScreen === 'upload' && <UploadScreen />}
                    {activeScreen === 'generate' && <GenerateScreen />}
                    {activeScreen === 'compliance' && <ComplianceScreen />}
                    {activeScreen === 'export' && <ExportScreen />}
                    {activeScreen === 'dashboard' && <DashboardScreen />}
                </div>
            </div>
        </div>
    );
};

export default WireframeApp;