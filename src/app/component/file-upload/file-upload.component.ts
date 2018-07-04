/**
 * @license
 * Copyright mnews All Rights Reserved.
 */

import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileUploadService } from './file-upload.service';
import { FirebaseService } from './firebase.service';

@Component({
  moduleId: module.id,
  selector: 'mnews-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'mnews-upload'
  }
})
export class FileUploadComponent {
  @Input() useFirebase: boolean = false;
  @Input() accept;
  @Input() maxFileSize;
  @Input() url;
  @Output() onChange = new EventEmitter();
  @Output() onBeforeUpload = new EventEmitter();
  @Output() onUpload = new EventEmitter();
  @Output() onRemove = new EventEmitter();

  currentFile;
  previewUrl;
  progress: number;
  fileName: string;

  constructor(
    private sanitizer: DomSanitizer,
    private fileUploadService: FileUploadService,
    private firebaseService: FirebaseService
  ) {}

  removePreview() {
    this.previewUrl = null;
  }

  onFileSelect(event) {
    if (this.useFirebase) {
      this.firebaseService.startUpload(event);
    } else {
      this.firebaseService.startUpload(event);
    }
  }
}
