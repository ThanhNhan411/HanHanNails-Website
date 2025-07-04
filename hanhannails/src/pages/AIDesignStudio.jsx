// AIDesignStudio.jsx
import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Palette, 
  Download, 
  Share2, 
  RotateCcw,
  Wand2,
  Save,
  Layers,
  Brush,
  Eraser,
  Zap,
  Image
} from 'lucide-react';
import './AIDesignStudio.css';

const AIDesignStudio = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushSize, setBrushSize] = useState(3);
  const [brushColor, setBrushColor] = useState('#FF1493');
  const [tool, setTool] = useState('brush');
  const [generatedDesigns, setGeneratedDesigns] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedNailShape, setSelectedNailShape] = useState('oval');
  const [selectedStyle, setSelectedStyle] = useState('elegant');

  const nailShapes = [
    { id: 'oval', name: 'Oval', icon: '◯' },
    { id: 'square', name: 'Square', icon: '▢' },
    { id: 'almond', name: 'Almond', icon: '⬭' },
    { id: 'coffin', name: 'Coffin', icon: '⬠' },
    { id: 'stiletto', name: 'Stiletto', icon: '△' }
  ];

  const stylePresets = [
    { id: 'elegant', name: 'Elegant', gradient: 'elegant-gradient' },
    { id: 'bold', name: 'Bold', gradient: 'bold-gradient' },
    { id: 'natural', name: 'Natural', gradient: 'natural-gradient' },
    { id: 'glitter', name: 'Glitter', gradient: 'glitter-gradient' },
    { id: 'minimal', name: 'Minimal', gradient: 'minimal-gradient' }
  ];

  const colorPalette = [
    '#FF1493', '#FF69B4', '#FFC0CB', '#FFB6C1',
    '#DC143C', '#FF0000', '#8B0000', '#800000',
    '#FF4500', '#FF6347', '#FF7F50', '#FFA500',
    '#FFD700', '#FFFF00', '#9ACD32', '#00FF00',
    '#00CED1', '#00BFFF', '#0000FF', '#4B0082',
    '#8B008B', '#9400D3', '#000000', '#FFFFFF'
  ];

  // Canvas drawing functions
  const startDrawing = (e) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    
    ctx.beginPath();
    ctx.moveTo(
      e.clientX - rect.left,
      e.clientY - rect.top
    );
  };

  const draw = (e) => {
    if (!isDrawing) return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    
    if (tool === 'brush') {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = brushColor;
    } else {
      ctx.globalCompositeOperation = 'destination-out';
    }
    
    ctx.lineTo(
      e.clientX - rect.left,
      e.clientY - rect.top
    );
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const generateDesign = async () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const mockDesigns = [
        {
          id: 1,
          image: 'https://imerikamarie.com/wp-content/uploads/2022/09/1-1.png',
          style: 'Elegant Floral',
          confidence: 95
        },
        {
          id: 2,
          image: 'https://imerikamarie.com/wp-content/uploads/2022/09/1-1.png',
          style: 'Abstract Art',
          confidence: 88
        },
        {
          id: 3,
          image: 'https://imerikamarie.com/wp-content/uploads/2022/09/1-1.png',
          style: 'Geometric Pattern',
          confidence: 92
        },
        {
          id: 4,
          image: 'https://imerikamarie.com/wp-content/uploads/2022/09/1-1.png',
          style: 'French Tips Variation',
          confidence: 85
        }
      ];
      
      setGeneratedDesigns(mockDesigns);
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="ai-design-studio">
      {/* Animated Background Elements */}
      <div className="animated-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="studio-container">
        {/* Header */}
        <div className="studio-header">
          <div className="header-title-wrapper">
            <Sparkles className="header-icon pulse-animation" />
            <h1 className="header-title">AI Nail Design Studio</h1>
            <Sparkles className="header-icon pulse-animation delay-500" />
          </div>
          <p className="header-subtitle">
            Vẽ ý tưởng của bạn và để AI biến nó thành hiện thực ✨
          </p>
        </div>

        <div className="studio-content">
          {/* Drawing Area */}
          <div className="drawing-section">
            <div className="drawing-panel">
              {/* Toolbar */}
              <div className="toolbar">
                {/* Tool Selection */}
                <div className="toolbar-section">
                  <div className="tool-buttons">
                    <button
                      onClick={() => setTool('brush')}
                      className={`tool-button ${tool === 'brush' ? 'active' : ''}`}
                    >
                      <Brush className="tool-icon" />
                      {tool === 'brush' && <span className="active-indicator"></span>}
                    </button>
                    <button
                      onClick={() => setTool('eraser')}
                      className={`tool-button ${tool === 'eraser' ? 'active' : ''}`}
                    >
                      <Eraser className="tool-icon" />
                      {tool === 'eraser' && <span className="active-indicator"></span>}
                    </button>
                  </div>

                  {/* Brush Size */}
                  <div className="brush-size-control">
                    <span className="control-label">Size:</span>
                    <div className="slider-wrapper">
                      <input
                        type="range"
                        min="1"
                        max="20"
                        value={brushSize}
                        onChange={(e) => setBrushSize(e.target.value)}
                        className="size-slider"
                      />
                      <div 
                        className="slider-thumb"
                        style={{ left: `${(brushSize - 1) / 19 * 100}%` }}
                      ></div>
                    </div>
                    <span className="size-value">{brushSize}px</span>
                  </div>

                  <button
                    onClick={clearCanvas}
                    className="clear-button"
                  >
                    <RotateCcw className="tool-icon" />
                  </button>
                </div>

                {/* Color Palette */}
                <div className="toolbar-section color-section">
                  <span className="control-label">Colors:</span>
                  <div className="color-palette">
                    {colorPalette.map((color, index) => (
                      <button
                        key={color}
                        onClick={() => setBrushColor(color)}
                        className={`color-button ${brushColor === color ? 'active' : ''}`}
                        style={{ 
                          backgroundColor: color,
                          boxShadow: brushColor === color ? `0 4px 20px ${color}40` : 'none'
                        }}
                      >
                        {brushColor === color && (
                          <span className="color-active-indicator"></span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Nail Shape Selection */}
                <div className="toolbar-section">
                  <span className="control-label">Nail Shape:</span>
                  <div className="shape-grid">
                    {nailShapes.map((shape) => (
                      <button
                        key={shape.id}
                        onClick={() => setSelectedNailShape(shape.id)}
                        className={`shape-button ${selectedNailShape === shape.id ? 'active' : ''}`}
                      >
                        <span className="shape-icon">{shape.icon}</span>
                        <span className="shape-name">{shape.name}</span>
                        {selectedNailShape === shape.id && (
                          <div className="shape-active-overlay"></div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Style Presets */}
                <div className="toolbar-section">
                  <span className="control-label">Style Preset:</span>
                  <div className="style-grid">
                    {stylePresets.map((style) => (
                      <button
                        key={style.id}
                        onClick={() => setSelectedStyle(style.id)}
                        className={`style-button ${selectedStyle === style.id ? 'active' : ''}`}
                      >
                        <div className={`style-preview ${style.gradient}`}>
                          <div className="style-overlay">
                            <span className="style-name">{style.name}</span>
                          </div>
                        </div>
                        {selectedStyle === style.id && (
                          <div className="style-checkmark">
                            <svg className="checkmark-icon" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Canvas */}
              <div className="canvas-container">
                <canvas
                  ref={canvasRef}
                  width={600}
                  height={400}
                  className="drawing-canvas"
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                />
                
                <div className="canvas-label">
                  <Image className="label-icon" />
                  Draw your design
                </div>
              </div>

              {/* Generate Button */}
              <button
                onClick={generateDesign}
                disabled={isGenerating}
                className={`generate-button ${isGenerating ? 'generating' : ''}`}
              >
                <div className="button-shine"></div>
                <div className="button-content">
                  {isGenerating ? (
                    <>
                      <div className="spinner-wrapper">
                        <div className="spinner"></div>
                        <div className="spinner-pulse"></div>
                      </div>
                      <span>Đang tạo thiết kế ma thuật...</span>
                      <Sparkles className="button-icon bounce" />
                    </>
                  ) : (
                    <>
                      <Zap className="button-icon" />
                      <span>Tạo Thiết Kế AI</span>
                      <Wand2 className="button-icon hover-rotate" />
                    </>
                  )}
                </div>
              </button>
            </div>
          </div>

          {/* Generated Designs */}
          <div className="results-section">
            <div className="results-panel">
              <h3 className="results-title">
                <div className="title-icon-wrapper">
                  <Layers className="title-icon" />
                </div>
                <span className="gradient-text">Thiết Kế Được Tạo</span>
              </h3>

              {generatedDesigns.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-icon-wrapper">
                    <Sparkles className="empty-icon" />
                    <div className="empty-icon-pulse">
                      <Sparkles className="empty-icon pulse" />
                    </div>
                  </div>
                  <p className="empty-text">Vẽ ý tưởng của bạn và nhấn</p>
                  <p className="empty-cta">"Tạo Thiết Kế AI"</p>
                </div>
              ) : (
                <div className="designs-grid">
                  {generatedDesigns.map((design, index) => (
                    <GeneratedDesignCard 
                      key={design.id} 
                      design={design} 
                      index={index}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Generated Design Card Component
const GeneratedDesignCard = ({ design, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div
      className="design-card"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-image-container">
        <img
          src={design.image}
          alt={design.style}
          className="card-image"
        />
        
        <div className="card-gradient-overlay"></div>
        
        {/* Confidence Badge */}
        <div className="confidence-badge">
          <div className="badge-icon-wrapper">
            <svg className="badge-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div className="badge-icon-pulse">
              <svg className="badge-icon pulse" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <span className="confidence-text">{design.confidence}%</span>
        </div>

        {/* Hover Actions */}
        <div className={`card-actions ${isHovered ? 'visible' : ''}`}>
          <div className="actions-container">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`action-button ${isLiked ? 'liked' : ''}`}
            >
              <svg className={`action-icon ${isLiked ? 'heartbeat' : ''}`} fill={isLiked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="action-button">
              <Save className="action-icon" />
            </button>
            <button className="action-button">
              <Download className="action-icon" />
            </button>
            <button className="action-button share">
              <Share2 className="action-icon" />
            </button>
          </div>
        </div>
      </div>
      
      <h4 className="card-title">{design.style}</h4>
    </div>
  );
};

export default AIDesignStudio;